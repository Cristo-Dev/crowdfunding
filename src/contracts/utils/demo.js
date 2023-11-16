const algosdk = require('algosdk');
if (typeof window === 'undefined') {
  // Server-side only code
  const fs = require('fs').promises; // Node.js file system module with promises
}


// Constants and configuration
const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const token = { 'X-API-Key': 'ROs0KPlr9G71RxDhah1D2qp0sjiJQnV2NGGFOAUf' };
const port = '';
const algodClient = new algosdk.Algodv2(token, baseServer, port);

// Utility function to compile TEAL programs
// async function compileProgram(client, programSource) {
//   const compiledProgram = await client.compile(programSource).do();
//   return new Uint8Array(Buffer.from(compiledProgram.result, 'base64'));
// }
async function compileTeal(tealFilePath) {
    try {
      const tealSource = await fs.readFile(tealFilePath, { encoding: 'utf8' });
      const compiledProgram = await algodClient.compile(tealSource).do();
      return new Uint8Array(Buffer.from(compiledProgram.result, "base64"));
    } catch (err) {
      console.error("Failed to compile TEAL program:", err);
      throw err;
    }
  }  

// Function to create the crowdfunding application
async function createCrowdfundingApp(client, creator, approvalProgram, clearProgram) {
  const params = await client.getTransactionParams().do();
  
    // Create the application arguments (app_args)
    const currentTimestamp = Math.floor(Date.now() / 1000); // current UNIX timestamp in seconds
    const startTimestamp = currentTimestamp + 30; // start 30 seconds from now
    const endTimestamp = currentTimestamp + 120; // end 120 seconds from now
    const goalAmount = 1000000; // example goal in microAlgos
    const isSponsored = true; // example flag
  
    // Convert the arguments to Uint8Array to be passed in app_args
    const appArgs = [
    //   new Uint8Array(Buffer.from(startTimestamp.toString(16), "hex")),
    //   new Uint8Array(Buffer.from(endTimestamp.toString(16), "hex")),
    algosdk.encodeUint64(startTimestamp),
    algosdk.encodeUint64(endTimestamp),

      algosdk.encodeUint64(goalAmount),
    //   new Uint8Array(Buffer.from(creator.addr)),
      new Uint8Array(algosdk.decodeAddress(creator.addr).publicKey),

      algosdk.encodeUint64(isSponsored ? 1 : 0),
    ];
  
  
  const txn = algosdk.makeApplicationCreateTxnFromObject({
    from: creator.addr,
    suggestedParams: params,
    approvalProgram,
    clearProgram,
    numGlobalByteSlices: 7,
    numGlobalInts: 5,
    numLocalByteSlices: 1,
    numLocalInts: 1,
    appArgs: appArgs,
    onComplete: algosdk.OnApplicationComplete.NoOpOC
  });

  const signedTxn = txn.signTxn(creator.sk);
  const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
  await waitForConfirmation(algodClient, txId);
  const transactionResponse = await algodClient.pendingTransactionInformation(txId).do();
  return transactionResponse['application-index'];
}

async function deployEscrowAndUpdateApp(client, creator, appId, approvalProgram, clearProgram, escrowTeal) {
    // Compile the escrow TEAL code
    const compiledEscrow = await compileTeal(escrowTeal, client);
  
    // Create LogicSig with compiled TEAL
    const escrowLogicSig = algosdk.makeLogicSig(compiledEscrow.bytes);
  
    // Fund the escrow account
    const fundEscrowTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: creator.addr,
      to: escrowLogicSig.address(),
      amount: MIN_BALANCE, // minimum balance to fund the escrow account
      suggestedParams: await client.getTransactionParams().do(),
    });
  
    // Update the application with escrow address
    const appArgs = [
      // Your application may expect other arguments here
      algosdk.encodeAddress(escrowLogicSig.address()),
    ];
  
    const updateAppTxn = algosdk.makeApplicationUpdateTxnFromObject({
      from: creator.addr,
      appIndex: appId,
      approvalProgram: approvalProgram,
      clearProgram: clearProgram,
      appArgs: appArgs,
      suggestedParams: await client.getTransactionParams().do(),
      accounts: undefined, // other accounts, if any, the application requires
      foreignApps: undefined, // other applications, if any, the application interacts with
      foreignAssets: undefined, // assets, if any, the application interacts with
    });
  
    // Group transactions
    algosdk.assignGroupID([fundEscrowTxn, updateAppTxn]);
  
    // Sign transactions
    const signedFundEscrowTxn = fundEscrowTxn.signTxn(creator.sk);
    const signedUpdateAppTxn = updateAppTxn.signTxn(creator.sk);
  
    // Send transactions
    const { txId } = await client.sendRawTransaction([signedFundEscrowTxn, signedUpdateAppTxn]).do();
  
    // Wait for confirmation
    const confirmation = await waitForConfirmation(client, txId);
  
    // Return escrow account information or confirmation based on your use case
    return { escrowAccount: escrowLogicSig, confirmation: confirmation };
  }
  
  

async function sendDonation(algodClient, donorAccount, appId, escrowAddress, donationAmount) {
    try {
      const suggestedParams = await algodClient.getTransactionParams().do();
  
      // Create the application call transaction
      const appCallTxn = algosdk.makeApplicationNoOpTxn(donorAccount.addr, suggestedParams, appId, [algosdk.encodeUint64(donationAmount)]);
  
      // Create the payment transaction to the escrow account
      const paymentTxn = algosdk.makePaymentTxnWithSuggestedParams(donorAccount.addr, escrowAddress, donationAmount, undefined, undefined, suggestedParams);
  
      // Group the transactions
      const txns = [appCallTxn, paymentTxn];
      algosdk.assignGroupID(txns);
  
      // Sign the transactions
      const signedAppCallTxn = appCallTxn.signTxn(donorAccount.sk);
      const signedPaymentTxn = paymentTxn.signTxn(donorAccount.sk);
  
      // Combine the signed transactions
      const signedTxns = [signedAppCallTxn, signedPaymentTxn];
  
      // Send the transactions
      const { txId } = await algodClient.sendRawTransaction(signedTxns).do();
  
      // Wait for confirmation
      await waitForConfirmation(algodClient, txId);
  
      console.log('Donation sent and confirmed in round: ', txId);
    } catch (error) {
      console.error('Error sending donation:', error);
    }
  }
  
  async function refundUser(client, user, appId, escrowLsig) {
    try {
      const suggestedParams = await client.getTransactionParams().do();
  
      // Fetch the user's account information
      const userInfo = await client.accountInformation(user.addr).do();
      const localState = userInfo['apps-local-state'].find(app => app.id === appId);
      const localStateKey = Buffer.from('ACCOUNT_INVESTMENT').toString('base64');
      const investmentEntry = localState['key-value'].find(kv => kv.key === localStateKey);
      
      if (!investmentEntry) {
        throw new Error('No investment record found for the user.');
      }
      const refundAmount = investmentEntry.value.uint;
  
      // App call transaction to refund
      const appCallTxn = algosdk.makeApplicationNoOpTxn(user.addr, suggestedParams, appId, [algosdk.encodeUint64(0)], undefined, undefined, undefined, [new Uint8Array(Buffer.from('refund'))]);
  
      // Payment transaction from the escrow to the user
      const paymentTxn = algosdk.makePaymentTxnWithSuggestedParams(escrowLsig.address(), user.addr, refundAmount, undefined, undefined, suggestedParams);
  
      // Group transactions
      algosdk.assignGroupID([appCallTxn, paymentTxn]);
  
      // Sign the transactions
      const signedAppCallTxn = appCallTxn.signTxn(user.sk);
      const signedPaymentTxn = algosdk.signLogicSigTransaction(paymentTxn, escrowLsig).blob;
  
      // Send the transactions
      const { txId } = await client.sendRawTransaction([signedAppCallTxn, signedPaymentTxn]).do();
  
      // Wait for confirmation
      await waitForConfirmation(client, txId);
  
      console.log('Refund transaction sent and confirmed in round: ', txId);
    } catch (error) {
      console.error('Error during the refund:', error);
    }
  }
  
  
  async function claimFunds(client, creator, appId, escrowLsig) {
    try {
      const suggestedParams = await client.getTransactionParams().do();
  
      // Read the global state to get the current amount
      const appInfo = await client.getApplicationByID(appId).do();
      const globalState = appInfo['params']['global-state'];
      const currentAmountKey = Buffer.from('CURRENT_AMOUNT').toString('base64');
      const currentAmountEntry = globalState.find(kv => kv.key === currentAmountKey);
      
      if (!currentAmountEntry) {
        throw new Error('No current amount record found.');
      }
      const claimAmount = currentAmountEntry.value.uint;
  
      // App call transaction to claim the funds
      const appCallTxn = algosdk.makeApplicationNoOpTxn(creator.addr, suggestedParams, appId, [algosdk.encodeUint64(0)], undefined, undefined, undefined, [new Uint8Array(Buffer.from('claim'))]);
  
      // Payment transaction from the escrow to the creator
      const paymentTxn = algosdk.makePaymentTxnWithSuggestedParams(escrowLsig.address(), creator.addr, claimAmount, undefined, undefined, suggestedParams);
  
      // Group transactions
      algosdk.assignGroupID([appCallTxn, paymentTxn]);
  
      // Sign the transactions
      const signedAppCallTxn = appCallTxn.signTxn(creator.sk);
      const signedPaymentTxn = algosdk.signLogicSigTransaction(paymentTxn, escrowLsig).blob;
  
      // Send the transactions
      const { txId } = await client.sendRawTransaction([signedAppCallTxn, signedPaymentTxn]).do();
  
      // Wait for confirmation
      await waitForConfirmation(client, txId);
  
      console.log(`Creator ${creator.addr} claimed ${claimAmount} from app ${appId}`);
    } catch (error) {
      console.error('Error during the claim:', error);
    }
  }
  
  
  async function closeCrowdfunding(client, closer, appId, escrowLsig) {
    try {
      const suggestedParams = await client.getTransactionParams().do();
  
      // Transaction to delete the application
      const deleteTxn = algosdk.makeApplicationDeleteTxn(closer.addr, suggestedParams, appId);
  
      // Transaction to close the escrow account and send remaining funds to the closer's account
      const closeEscrowTxn = algosdk.makePaymentTxnWithSuggestedParams(
        escrowLsig.address(),
        closer.addr,
        0,
        closer.addr, // Sending all remaining funds to the closer's account
        undefined,
        suggestedParams
      );
  
      // Group the transactions
      algosdk.assignGroupID([deleteTxn, closeEscrowTxn]);
  
      // Sign the transactions
      const signedDeleteTxn = deleteTxn.signTxn(closer.sk);
      const signedCloseEscrowTxn = algosdk.signLogicSigTransaction(closeEscrowTxn, escrowLsig).blob;
  
      // Send the transactions
      const { txId } = await client.sendRawTransaction([signedDeleteTxn, signedCloseEscrowTxn]).do();
  
      // Wait for confirmation
      await waitForConfirmation(client, txId);
  
      console.log(`Deleted app with id ${appId} and closed the associated escrow`);
    } catch (error) {
      console.error('Error closing crowdfunding:', error);
    }
  }
  
  async function printGlobalState(client, appId) {
    try {
      const appInfo = await client.getApplicationByID(appId).do();
      console.log('Global state:', appInfo.params['global-state']);
    } catch (error) {
      console.error('Error printing global state:', error);
    }
  }
  
  async function printUserState(client, userAddr, appId) {
    try {
      const accountInfo = await client.accountInformation(userAddr).do();
      for (const appLocal of accountInfo['apps-local-state']) {
        if (appLocal.id === appId) {
          console.log('User state for this app:', appLocal['key-value']);
          break;
        }
      }
    } catch (error) {
      console.error('Error printing user state:', error);
    }
  }
  
  async function printEscrowAccountBalance(client, escrowAddress) {
    try {
      const accountInfo = await client.accountInformation(escrowAddress).do();
      console.log('The escrow account now contains', accountInfo.amount, 'microAlgos');
    } catch (error) {
      console.error('Error printing escrow account balance:', error);
    }
  }
  
  // ... after each operation, like creating an app or sending a transaction, you could call:
//   await printGlobalState(client, appId);
//   await printUserState(client, userAddr, appId);
//   await printEscrowAccountBalance(client, escrowAddress);
  
  // ... and so on for each action you perform.
  
  
// Function to wait for confirmation of a transaction
async function waitForConfirmation(client, txId) {
  let response = await client.status().do();
  let currentRound = response['last-round'];
  while (true) {
    const pendingInfo = await client.pendingTransactionInformation(txId).do();
    if (pendingInfo['confirmed-round'] !== null && pendingInfo['confirmed-round'] > 0) {
      // Transaction confirmed
      console.log("Transaction confirmed in round", pendingInfo['confirmed-round']);
      break;
    }
    currentRound++;
    await client.statusAfterBlock(currentRound).do();
  }
}

// Main function to run the deployment
async function deployContracts() {
  // Replace these with your actual account mnemonics and TEAL program sources
  const creatorMnemonic = 'race verify jungle arctic barrel laptop deliver cruel outside auction garden slogan wheat slice involve cream quick seek cargo tortoise warrior earth debris able capital';
//   const approvalProgramSource = 'approval_program_teal_source';
//   const clearProgramSource = 'clear_program_teal_source';

    

  const creator = algosdk.mnemonicToSecretKey(creatorMnemonic);

  try {
    // Compile TEAL programs
    const approvalProgram = await compileTeal('src/contracts/teal/crowdfunding_approval.teal');
    const clearProgram = await compileTeal('src/contracts/teal/crowdfunding_clear.teal');
    const escrowProgram = await compileTeal('src/contracts/teal/escrow.teal');
    // const approvalProgramBytes = await compileTeal('src/contracts/teal/crowdfunding_approval.teal');
    // const clearProgramBytes = await compileTeal('src/contracts/teal/crowdfunding_clear.teal');
    // const escrowProgramBytes = await compileTeal('src/contracts/teal/escrow.teal');

    // Create crowdfunding application
    // const appId = await createCrowdfundingApp(algodClient, creator, approvalProgram, clearProgram, escrowProgram);
    const appId = await createCrowdfundingApp(algodClient, creator, approvalProgram, clearProgram);
    console.log("Crowdfunding application created with ID:", appId);

    // Deploy escrow account and update the application (not yet implemented)
    // You will need to implement the logic to create and fund the escrow account
    // and update the application with the escrow account address

  } catch (error) {
    console.error("Error deploying contracts:", error);
  }
}

// Run the deployment
deployContracts().then(() => {
  console.log('Contracts deployment completed');
}).catch(e => {
  console.error('Error during contracts deployment:', e);
});


async function main() {
    try {
      // Run the deployment
      await deployContracts();
      console.log('Contracts deployment completed');
    } catch (e) {
      console.error('Error during contracts deployment:', e);
    }
  }
  
  // Now call the main function
  main();
  