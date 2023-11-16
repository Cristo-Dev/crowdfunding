import algosdk from "algosdk";
import { Buffer } from "buffer";
import {
  algodClient,
  crowdfundingAppNote,
  initialAppId,
  numGlobalBytes,
  numGlobalInts,
  numLocalBytes,
  numLocalInts,
  MIN_ACCOUNT_BALANCE,
  donateArg,
  claimArg,
  refundArg,
  amountInvestedKey,
  currentAmountKey,
  sponsoredProjectFee,
  platformAddr,
} from "./constants";
// import raw from "raw.macro";

import { PeraWalletConnect } from "@perawallet/connect";
const peraWallet = new PeraWalletConnect();

export class crowdfundingProject {
  constructor(
    name,
    image,
    description,
    goal,
    startDate,
    endDate,
    creator,
    isSponsored = false,
    current_amount = 0,
    appId = 0,
    escrow = null,
    deleted = false,
    claimed = false,
    platform = platformAddr
  ) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.goal = goal;
    this.current_amount = current_amount;
    this.creator = creator;
    this.startDate = startDate;
    this.endDate = endDate;
    this.appId = appId;
    this.escrow = escrow;
    this.isSponsored = isSponsored;
    this.deleted = deleted;
    this.claimed = claimed;
    this.platform = platformAddr;
  }
}

const compileProgram = async (programSource) => {
  let encoder = new TextEncoder();
  let programBytes = encoder.encode(programSource);
  let compileResponse = await algodClient.compile(programBytes).do();
  return new Uint8Array(Buffer.from(compileResponse.result, "base64"));
};

let compiledApprovalProgram;
let compiledClearProgram;

export const createProjectAction = async (senderAddress, project, approvalProgram, clearProgram) => {
  console.log("Adding project...");
  console.log(project);

  compiledApprovalProgram = await compileProgram(approvalProgram);
  compiledClearProgram = await compileProgram(clearProgram);

  let params = await algodClient.getTransactionParams().do();
  params.fee = algosdk.ALGORAND_MIN_TX_FEE;
  params.flatFee = true;

  //   const peraWallet = new PeraWalletConnect();
  // Build note to identify transaction later and required app args as Uint8Arrays
  let note = new TextEncoder().encode(crowdfundingAppNote);

  let goal = algosdk.encodeUint64(project.goal);
  let startDate = algosdk.encodeUint64(project.startDate);
  let endDate = algosdk.encodeUint64(project.endDate);
  let platform = algosdk.decodeAddress(platformAddr).publicKey;
  let isSponsored = algosdk.encodeUint64(project.isSponsored ? 1 : 0);

  let appArgs = [startDate, endDate, goal, platform, isSponsored];
  console.log(startDate, endDate, goal);

  // Create ApplicationCreateTxn
  let txn = algosdk.makeApplicationCreateTxnFromObject({
    from: senderAddress,
    suggestedParams: params,
    onComplete: algosdk.OnApplicationComplete.NoOpOC,
    approvalProgram: compiledApprovalProgram,
    clearProgram: compiledClearProgram,
    numLocalInts: numLocalInts,
    numLocalByteSlices: numLocalBytes,
    numGlobalInts: numGlobalInts,
    numGlobalByteSlices: numGlobalBytes,
    note: note,
    appArgs: appArgs,
  });

  let txId;

  if (!project.isSponsored) {
    txId = txn.txID().toString();

    let signedTxnGroup;
    let binarySignedTx;
    const txGroups = [{ txn: txn, signers: [senderAddress] }];
    try {
      // Sign the transaction with Pera Wallet
      signedTxnGroup = await peraWallet.signTransaction([txGroups]);

      // Debug: Log the entire signedTxnGroup to see what it contains
      console.log("signedTxnGroup:", signedTxnGroup);

      // Check if the first item of signedTxnGroup is a Uint8Array
      if (signedTxnGroup[0] instanceof Uint8Array) {
        binarySignedTx = signedTxnGroup[0];
      } else {
        // If conversion is not possible, throw an error
        throw new Error("Signed transaction blob is not a byte array");
      }

      // Debug: Log the binarySignedTx to see what it looks like right before sending
      console.log("Final binarySignedTx for sending:", binarySignedTx);

      // Send the signed transaction
      const sendTxResponse = await algodClient
        .sendRawTransaction(binarySignedTx)
        .do();
      console.log("Transaction sent!", sendTxResponse);
    } catch (error) {
      console.error("Error signing or sending transaction", error);
      if (signedTxnGroup) {
        console.error("Current state of signedTxnGroup:", signedTxnGroup);
      }
      if (binarySignedTx) {
        console.error("Current state of binarySignedTx:", binarySignedTx);
      }
    }

    // console.log("Sent transaction with txID: %s", txId);
  } else {
    let feeTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: senderAddress,
      to: platformAddr,
      amount: sponsoredProjectFee,
      suggestedParams: params,
    });

    let txnArray = [txn, feeTxn];
    algosdk.assignGroupID(txnArray);

    const txGroups = [
      { txn: txn, signers: [senderAddress] },
      { txn: feeTxn, signers: [senderAddress] },
    ];
    let signedTxnGroups;
    let binarySignedTxs;
    try {
      signedTxnGroups = await peraWallet.signTransaction([txGroups]);
      console.log("Signed group transaction");
      console.log(
        "signedTxnGroups returned from signTransaction:",
        signedTxnGroups
      );
      console.log("Length of signedTxnGroups:", signedTxnGroups.length);

      // Ensure signedTxnGroups is an array and has elements
      if (!Array.isArray(signedTxnGroups) || signedTxnGroups.length === 0) {
        throw new Error("signedTxnGroups is not an array or is empty");
      }

      console.log("Signed group transaction");

      // Debug: Ensure all blobs are byte arrays
      binarySignedTxs = signedTxnGroups.map((tx, index) => {
        console.log(`Transaction at index ${index} blob:`, tx.blob);
        if (!(tx.blob instanceof Uint8Array)) {
          // Attempt to convert the blob to a Uint8Array if possible
          if (typeof tx.blob === "string") {
            return new Uint8Array(Buffer.from(tx.blob, "base64"));
          } else {
            // If conversion is not possible, throw an error
            throw new Error(
              `Transaction blob at index ${index} is not a byte array`
            );
          }
        }
        return tx.blob;
      });

      console.log("binarySignedTxs array before sending:", binarySignedTxs);
      console.log("Attempting to send group transaction1");
      await algodClient.sendRawTransaction(binarySignedTxs).do();
      console.log("Sent group transaction");

      txId = signedTxnGroups[0].txID; // Ensure this is the correct way to retrieve the txID
    } catch (error) {
      console.error("Error signing or sending group transaction", error);
      if (signedTxnGroups) {
        console.error("Current state of signedTxnGroups:", signedTxnGroups);
      }
      if (binarySignedTxs) {
        console.error("Current state of binarySignedTxs:", binarySignedTxs);
      }
      // Handle the error appropriately
      // Maybe rethrow the error or handle it based on your application's needs
      throw error;
    }
  }

  // Wait for transaction to be confirmed
  let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);

  // Get the completed Transaction
  console.log(
    "Transaction " +
      txId +
      " confirmed in round " +
      confirmedTxn["confirmed-round"]
  );

  // Get created application id and notify about completion
  let transactionResponse = await algodClient
    .pendingTransactionInformation(txId)
    .do();
  let appId = transactionResponse["application-index"];
  console.log("Created new app-id: ", appId);
  return appId;
};

export const deployEscrowAndUpdateProjectAction = async (
  senderAddress,
  appId,
  escrowProgram
) => {
  console.log("Deploying Escrow account...");
  //   const peraWallet = new PeraWalletConnect();

  // Replace the placeholder with the actual appId in the escrow TEAL code
  const replacedEscrowProgram = escrowProgram.replace('int const_app_id', `int ${appId}`);
  // Compile the modified escrow program
  const compiledEscrowProgram = await compileProgram(replacedEscrowProgram);
  
  // const compiledEscrowProgram = await compileProgram(
  //   escrowProgram.replace(initialAppId, appId)
  // );
  const escrowLSig = new algosdk.LogicSigAccount(compiledEscrowProgram);

  console.log("This is the logic signature: ", escrowLSig);

  let params = await algodClient.getTransactionParams().do();
  params.fee = algosdk.ALGORAND_MIN_TX_FEE;
  params.flatFee = true;

  let appArgs = [algosdk.decodeAddress(escrowLSig.address()).publicKey];

  let appUpdateTxn = algosdk.makeApplicationUpdateTxnFromObject({
    from: senderAddress,
    appIndex: appId,
    onComplete: algosdk.OnApplicationComplete.NoOpOC,
    approvalProgram: compiledApprovalProgram,
    clearProgram: compiledClearProgram,
    suggestedParams: params,
    appArgs: appArgs,
  });

  let fundEscrowTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: senderAddress,
    to: escrowLSig.address(),
    amount: MIN_ACCOUNT_BALANCE,
    suggestedParams: params,
  });

  let txnArray = [appUpdateTxn, fundEscrowTxn];

  // Create group transaction out of previously build transactions
  algosdk.assignGroupID(txnArray);

  //   let binaryTxs = [appUpdateTxn.toByte(), fundEscrowTxn.toByte()];
  //   let base64Txs = binaryTxs.map((binary) =>
  //     window.AlgoSigner.encoding.msgpackToBase64(binary)
  //   );

  //   let signedTxs = await window.AlgoSigner.signTxn([
  //     { txn: base64Txs[0] },
  //     { txn: base64Txs[1] },
  //   ]);
  //   console.log("Signed group transaction");

  const txGroups = [
    { txn: appUpdateTxn, signers: [senderAddress] },
    { txn: fundEscrowTxn, signers: [senderAddress] },
  ];
  const signedTxnGroups = await peraWallet.signTransaction([txGroups]);
  console.log("Signed group transaction");
  // console.log("signedTxnGroups:", JSON.stringify(signedTxnGroups, null, 2));

  // Convert the signed transaction object to Uint8Array
  const binarySignedTxs = signedTxnGroups.map((txGroup) => {
    const txBytes = Object.keys(txGroup).map((key) => txGroup[key]);
    return new Uint8Array(txBytes);
  });

  // // We need to ensure that the blobs are Uint8Arrays
  // // const binarySignedTxs = signedTxnGroups.map((signedTx, index) => {
  //   const blob = signedTx.blob;
  //   console.log(`Transaction at index ${index} blob:`, blob);
  //   if (blob instanceof Uint8Array) {
  //     return blob;
  //   } else if (typeof blob === 'string') {
  //     // Assuming the blob is a base64 string, we convert it to a Uint8Array
  //     return new Uint8Array(Buffer.from(blob, 'base64'));
  //   } else {
  //     // If the blob is neither a Uint8Array nor a base64 string, we throw an error
  //     throw new Error(`Transaction blob at index ${index} is not a byte array`);
  //   }
  // });

  console.log("Attempting to send group transaction2");
  const sendTxResponse = await algodClient.sendRawTransaction(binarySignedTxs).do();
  console.log("sendTxResponse:", sendTxResponse);
  

  // Make sure to log the entire response to see what you're receiving
  console.log("sendTxResponse:", sendTxResponse);

  // Assuming sendTxResponse contains the txId directly
// If it's nested within the response, you'll need to adjust the access accordingly
const txId = sendTxResponse.txId; 
  // Log the txId to make sure it's not undefined
console.log("Transaction ID at 2:", txId);

if (typeof txId === 'undefined') {
  throw new Error('Transaction ID is undefined, cannot proceed to check transaction status.');
}

// Now you can use txId to check the transaction status
const pendingInfo = await algodClient.pendingTransactionInformation(txId).do();
console.log("Transaction Pending Information:", pendingInfo);

  // Use the correct txId to wait for confirmation
  let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);
  console.log("Transaction group confirmed in round " + confirmedTxn["confirmed-round"]);


  // let confirmedTxn = await algosdk.waitForConfirmation(
  //   algodClient,
  //   signedTxnGroups[0].txID,
  //   4
  // );
  // console.log(
  //   "Transaction group confirmed in round " + confirmedTxn["confirmed-round"]
  // );

  console.log("Deployed Escrow and updated app with id: ", appId);
  return compiledEscrowProgram;
};

// const optInProjectAction = async (senderAddress, appId) => {
//   // Check if the window object is available
//   if (typeof window === "undefined") {
//     // If window is not available, we're running server-side and should exit the function
//     console.error("optInProjectAction can only be run on the client-side.");
//     return;
//   }
  
//   let params = await algodClient.getTransactionParams().do();
//   params.fee = algosdk.ALGORAND_MIN_TX_FEE;
//   params.flatFee = true;

//   let appOptInTxn = algosdk.makeApplicationOptInTxnFromObject({
//     from: senderAddress,
//     appIndex: appId,
//     suggestedParams: params,
//   });
//   // Get transaction ID
//   let txId = appOptInTxn.txID().toString();
//   const txn_b64 = await window.AlgoSigner.encoding.msgpackToBase64(
//     appOptInTxn.toByte()
//   );

//   // Sign & submit the transaction
//   let signedTxn = await window.AlgoSigner.signTxn([{ txn: txn_b64 }]);
//   console.log("Signed transaction with txID: %s", txId);

//   let binarySignedTx = await window.AlgoSigner.encoding.base64ToMsgpack(
//     signedTxn[0].blob
//   );
//   console.log("Attempting to send transaction");
//   await algodClient.sendRawTransaction(binarySignedTx).do();
//   console.log("Sent transaction with txID: %s", txId);

//   // Wait for transaction to be confirmed
//   let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);

//   // Get the completed Transaction
//   console.log(
//     "Transaction " +
//       txId +
//       " confirmed in round " +
//       confirmedTxn["confirmed-round"]
//   );
//   console.log("User opted in app with id: ", appId);
//   return confirmedTxn;
// };
const optInProjectAction = async (senderAddress, appId) => {
  // Check if the window object is available
  if (typeof window === "undefined") {
    // If window is not available, we're running server-side and should exit the function
    console.error("optInProjectAction can only be run on the client-side.");
    return;
  }
  
  let params = await algodClient.getTransactionParams().do();
  params.fee = algosdk.ALGORAND_MIN_TX_FEE;
  params.flatFee = true;

  // Create the transaction object for opting in
  let appOptInTxn = algosdk.makeApplicationOptInTxnFromObject({
    from: senderAddress,
    appIndex: appId,
    suggestedParams: params,
  });

  // Prepare the transaction to be signed using Pera Wallet
  //                 : SignerTransaction[]
  const txnToBeSigned = [{
    txn: Buffer.from(algosdk.encodeUnsignedTransaction(appOptInTxn)).toString('base64'),
  }];

  // Use Pera Wallet to sign the transaction
  try {
    const signedTxn = await peraWallet.signTransaction([txnToBeSigned]);

    // Send the signed transaction using the Algod client
    const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
    console.log("Transaction sent with txID: %s", txId);

    // Wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);
    console.log(
      "Transaction " + txId + " confirmed in round " + confirmedTxn["confirmed-round"]
    );

    return confirmedTxn;
  } catch (error) {
    console.error('Error during transaction signing or sending:', error);
    throw error;
  }
};


export const fundProjectAndOptInAction = async (
  senderAddress,
  escrow,
  project,
  amount
) => {
  if (typeof window === "undefined") {
    console.error("fundProjectAndOptInAction can only be run on the client-side.");
    return;
  }

  async function checkUserOptedIn() {
    if (!(await isUserOptedInApp(senderAddress, project.appId))) {
      await optInProjectAction(senderAddress, project.appId);
    } else {
      console.log("User already opted-in app: ", project.appId);
    }
  }
  await checkUserOptedIn();
  console.log("opted innnn");
  await fundProjectAction(senderAddress, escrow, project, amount);
};








const fundProjectAction = async (senderAddress, escrow, project, amount) => {
  let params = await algodClient.getTransactionParams().do();
  params.fee = algosdk.ALGORAND_MIN_TX_FEE;
  params.flatFee = true;

  let appCallTxn = algosdk.makeApplicationCallTxnFromObject({
    from: senderAddress,
    appIndex: project.appId,
    onComplete: algosdk.OnApplicationComplete.NoOpOC,
    appArgs: [donateArg],
    suggestedParams: params,
  });

  let payTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: senderAddress,
    to: escrow.address(),
    amount: amount,
    suggestedParams: params,
  });

  let txnArray = [appCallTxn, payTxn];

  // Create group transaction out of previously build transactions
  algosdk.assignGroupID(txnArray);

  //   let binaryTxs = [appCallTxn.toByte(), payTxn.toByte()];
  //   let base64Txs = binaryTxs.map((binary) =>
  //     window.AlgoSigner.encoding.msgpackToBase64(binary)
  //   );

  //   let signedTxs = await window.AlgoSigner.signTxn([
  //     { txn: base64Txs[0] },
  //     { txn: base64Txs[1] },
  //   ]);
  const txGroups = [
    { txn: appCallTxn, signers: [senderAddress] },
    { txn: payTxn, signers: [senderAddress] },
  ];
  const signedTxnGroups = await peraWallet.signTransaction([txGroups]);

  console.log("Signed group transaction");

  //   let binarySignedTxs = signedTxs.map((tx) =>
  //     window.AlgoSigner.encoding.base64ToMsgpack(tx.blob)
  //   );
  console.log("Attempting to send group transaction3");
  //   await algodClient.sendRawTransaction(binarySignedTxs).do();
  for (const signedTxnGroup of signedTxnGroups) {
    const { txId } = await algodClient.sendRawTransaction(signedTxnGroup).do();
    console.log(`Transaction ID: ${txId}`);
  }

  console.log("Sent group transaction");

  //   let confirmedTxn = await algosdk.waitForConfirmation(
  //     algodClient,
  //     signedTxs[0]["txID"],
  //     4
  //   );
  let confirmedTxn = await algosdk.waitForConfirmation(
    algodClient,
    signedTxnGroups[0].txID,
    4
  );
  console.log(
    "Transaction group confirmed in round " + confirmedTxn["confirmed-round"]
  );

  console.log("Funded project with app ID ", project.appId, " with ", {
    amount,
  });
  const accountInfo = await algodClient
    .accountInformation(escrow.address())
    .do();
  console.log(accountInfo["amount"]);
};

export const refundUserAction = async (senderAddress, escrow, project) => {
  const amount = await readUserLocalStateForApp(senderAddress, project.appId);
  console.log("This user invested", amount);

  let params = await algodClient.getTransactionParams().do();
  params.fee = algosdk.ALGORAND_MIN_TX_FEE * 2;
  params.flatFee = true;

  let appCallTxn = algosdk.makeApplicationCallTxnFromObject({
    from: senderAddress,
    appIndex: project.appId,
    onComplete: algosdk.OnApplicationComplete.NoOpOC,
    appArgs: [refundArg],
    suggestedParams: params,
  });

  params.fee = 0;
  let payTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: escrow.address(),
    to: senderAddress,
    amount: amount,
    suggestedParams: params,
  });

  // Create group transaction out of previously build transactions
  algosdk.assignGroupID([appCallTxn, payTxn]);

  const txGroups = [
    { txn: appCallTxn, signers: [senderAddress] },
    { txn: payTxn, signers: [] }, // LogicSig (escrow) will sign this txn, so no need for signers here
  ];
  const signedTxnGroups = await peraWallet.signTransaction([txGroups]);

  let binarySignedTx2 = algosdk.signLogicSigTransaction(payTxn, escrow).blob;
  console.log("Signed group transaction");

  console.log("Attempting to send group transaction4");
  await algodClient
    .sendRawTransaction([...signedTxnGroups[0], binarySignedTx2])
    .do();
  console.log("Sent group transaction");

  let confirmedTxn = await algosdk.waitForConfirmation(
    algodClient,
    signedTxnGroups[0][0].txID,
    4
  );
  console.log(
    "Transaction group confirmed in round " + confirmedTxn["confirmed-round"]
  );

  console.log("Refunded user from the funds of app: ", project.appId);
  const accountInfo = await algodClient
    .accountInformation(escrow.address())
    .do();
  console.log("The escrow now contains: ", accountInfo["amount"]);
  return amount;
};

export const claimFundstAction = async (senderAddress, escrow, project) => {
  let totalFunds = await readGlobalState(project.appId);
  totalFunds = readRequestedKeyFromState(totalFunds, currentAmountKey);
  console.log("Current amount of funds in escrow: ", totalFunds);

  let params = await algodClient.getTransactionParams().do();
  params.fee = algosdk.ALGORAND_MIN_TX_FEE * 2;
  params.flatFee = true;

  let appCallTxn = algosdk.makeApplicationCallTxnFromObject({
    from: senderAddress,
    appIndex: project.appId,
    onComplete: algosdk.OnApplicationComplete.NoOpOC,
    appArgs: [claimArg],
    suggestedParams: params,
  });

  params.fee = 0;
  let payTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: escrow.address(),
    to: senderAddress,
    amount: totalFunds,
    suggestedParams: params,
  });

  // Create group transaction out of previously build transactions
  algosdk.assignGroupID([appCallTxn, payTxn]);

  const txGroups = [
    { txn: appCallTxn, signers: [senderAddress] },
    { txn: payTxn, signers: [] }, // LogicSig (escrow) will sign this txn, so no need for signers here
  ];
  const signedTxnGroups = await peraWallet.signTransaction([txGroups]);

  let binarySignedTx2 = algosdk.signLogicSigTransaction(payTxn, escrow).blob;
  console.log("Signed group transaction");

  console.log("Attempting to send group transaction6");
  await algodClient
    .sendRawTransaction([...signedTxnGroups[0], binarySignedTx2])
    .do();
  console.log("Sent group transaction");

  let confirmedTxn = await algosdk.waitForConfirmation(
    algodClient,
    signedTxnGroups[0][0].txID,
    4
  );
  console.log(
    "Transaction group confirmed in round " + confirmedTxn["confirmed-round"]
  );

  console.log("Creator claimed all the funds in app: ", project.appId);
  const accountInfo = await algodClient
    .accountInformation(escrow.address())
    .do();
  console.log("The escrow now contains: ", accountInfo["amount"]);
};

export const deleteProjectAction = async (senderAddress, escrow, project) => {
  let params = await algodClient.getTransactionParams().do();
  params.fee = algosdk.ALGORAND_MIN_TX_FEE;
  params.flatFee = true;

  let appCallTxn = algosdk.makeApplicationDeleteTxnFromObject({
    from: senderAddress,
    appIndex: project.appId,
    suggestedParams: params,
  });

  let closeEscrowTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: escrow.address(),
    to: escrow.address(),
    closeRemainderTo: senderAddress,
    amount: 0,
    suggestedParams: params,
  });

  // Create group transaction out of previously build transactions
  algosdk.assignGroupID([appCallTxn, closeEscrowTxn]);

  const txGroups = [
    { txn: appCallTxn, signers: [senderAddress] },
    { txn: closeEscrowTxn, signers: [] }, // LogicSig (escrow) will sign this txn, so no need for signers here
  ];
  const signedTxnGroups = await peraWallet.signTransaction([txGroups]);

  let binarySignedTx2 = algosdk.signLogicSigTransaction(
    closeEscrowTxn,
    escrow
  ).blob;
  console.log("Signed group transaction");

  console.log("Attempting to send group transaction7");
  await algodClient
    .sendRawTransaction([...signedTxnGroups[0], binarySignedTx2])
    .do();
  console.log("Sent group transaction");

  let confirmedTxn = await algosdk.waitForConfirmation(
    algodClient,
    signedTxnGroups[0][0].txID,
    4
  );
  console.log(
    "Transaction group confirmed in round " + confirmedTxn["confirmed-round"]
  );

  console.log(
    "Emptied escrow account and deleted app with id:  ",
    project.appId
  );
  const accountInfo = await algodClient
    .accountInformation(escrow.address())
    .do();
  console.log("The escrow now contains: ", accountInfo["amount"]);
};

const readUserLocalStateForApp = async (userAddress, appId) => {
  let accountInfo = await algodClient
    .accountApplicationInformation(userAddress, appId)
    .do();
  accountInfo = accountInfo["app-local-state"]["key-value"];
  return readRequestedKeyFromState(accountInfo, amountInvestedKey);
};

const readRequestedKeyFromState = (state, key) => {
  const requestedInfo = state?.filter((e) => e.key === key);
  if (requestedInfo) return requestedInfo[0]["value"]["uint"];
  else return 0;
};

const isUserOptedInApp = async (userAddress, appId) => {
  const accountInfo = await algodClient
    .accountApplicationInformation(userAddress, appId)
    .do();
  return "app-local-state" in accountInfo;
};

const readGlobalState = async (appId) => {
  try {
    let applicationInfoResponse = await algodClient
      .getApplicationByID(appId)
      .do();
    let globalStateTemp = applicationInfoResponse["params"]["global-state"];
    return globalStateTemp;
  } catch (err) {
    console.log(err);
  }
};
