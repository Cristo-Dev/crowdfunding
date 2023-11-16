import { toast} from "react-hot-toast";
import { claimFundstAction, createProjectAction, deleteProjectAction, deployEscrowAndUpdateProjectAction, fundProjectAndOptInAction, refundUserAction } from "./crowdfunding";
import { firestoreGetProjectAction, firestoreInsertInfoAction, firestoreDonateAction} from "./firebase";
import {crowdfundingProject} from './crowdfunding';
import algosdk, { microalgosToAlgos } from "algosdk";
// const fs = require('fs');
// const path = require('path');

export async function getServerSideProps(context) {
    // Path to your .teal file
    const approvalProgramPath = path.join(process.cwd(), 'src/contracts/teal/crowdfunding_approval.teal');
    const clearProgramPath = path.join(process.cwd(), 'src/contracts/teal/crowdfunding_clear.teal');
    const escrowProgramPath = path.join(process.cwd(), 'src/contracts/teal/escrow.teal');

    // Read the content of the .teal file
    const approvalProgram = fs.readFileSync(approvalProgramPath, 'utf8');
    const clearProgram = fs.readFileSync(clearProgramPath, 'utf8');
    const escrowProgram = fs.readFileSync(escrowProgramPath, 'utf8');
  
  
    // Pass the content to your page as props
    return { 
        props: { 
          approvalProgram,
          clearProgram,
          escrowProgram
        } 
      };
  }

// export const createProject = async (sender, data) => {
//     let project = new crowdfundingProject(
//         data.name, data.image, data.description, 
//         data.goal, data.start, data.end, sender.address, data.isSponsored)    
        
//     // First create the crowdfunding project
//     createProjectAction(sender.address, project)
//         .then((appId) => {
//             project.appId = appId
//             // Then deploy and fund the connected escrow address
//             deployEscrowAndUpdateProjectAction(sender.address, appId).then((escrow) => {
//             project.escrow = escrow.toString()
//             console.log(project.escrow)
//             // Then insert all the information in the firestore database
//             }).then(() => firestoreInsertInfoAction(project)).then(() =>
//                 {toast.success("Project created successfully!", {
//                 position: 'bottom-center'});
//         })}).catch(error => {
//             console.log(error);
//             toast.error("Could not create the project", {
//                 position: 'bottom-center'
//             });
//         });
// };

export const createProject = async (sender, data, approvalProgram, clearProgram, escrowProgram) => {
    try {
        let project = new crowdfundingProject(
            data.name, data.image, data.description, 
            data.goal, data.start, data.end, sender.address, data.isSponsored
        );
        
        // Compile the approval program here or pass to the createProjectAction function
        // This assumes that the createProjectAction expects the compiled approval program
        const compiledApprovalProgram = await compileProgram(approvalProgram);
        const compiledClearProgram = await compileProgram(clearProgram);
        const compiledEscrowProgram = await compileProgram(escrowProgram);


        // First create the crowdfunding project
        // const appId = await createProjectAction(sender.address, project);
        const appId = await createProjectAction(sender.address, project, compiledApprovalProgram, compiledClearProgram);
        project.appId = appId;

        // Then deploy and fund the connected escrow address
        // const escrow = await deployEscrowAndUpdateProjectAction(sender.address, appId);
        const escrow = await deployEscrowAndUpdateProjectAction(sender.address, appId, compiledEscrowProgram);
        project.escrow = escrow.toString();
        console.log(project.escrow);

        // Then insert all the information in the Firestore database
        await firestoreInsertInfoAction(project);
        
        toast.success("Project created successfully!", {
            position: 'bottom-center'
        });
    } catch (error) {
        console.error(error);
        toast.error("Could not create the project", {
            position: 'bottom-center'
        });
    }
};



export const deleteProject = async (sender, appId) => {
    let project = await firestoreGetProjectAction(appId.toString());
    let escrowUInt8 = Uint8Array.from(project.escrow.split(',').map(x=>parseInt(x,10)))
    let escrow = new algosdk.LogicSigAccount(escrowUInt8)

    deleteProjectAction(sender, escrow, {appId: appId}).then(() => {
        project.deleted = true
        firestoreInsertInfoAction(project).then(()=>
            toast.success("Project deleted successfully!", {
                position: 'bottom-center'}
        ))}).catch(error => {
            console.log(error);
            toast.error("Could not delete the project", {
                position: 'bottom-center'
            });
        });
};


export const donateToProject = async (sender, project, amount) => {
    try {
      console.log(`Starting donation process for project: ${project.name}`);
      console.log(`Sender: ${sender}`);
      console.log(`Amount: ${amount}`);
  
      // Convert amount to microalgos if needed
      amount = algosdk.algosToMicroalgos(parseInt(amount));
  
      // Log the escrow account information
      let escrowUInt8 = Uint8Array.from(project.escrow.split(',').map(x => parseInt(x, 10)));
      console.log(`Escrow Account Uint8Array: ${escrowUInt8}`);
  
      let escrow = new algosdk.LogicSigAccount(escrowUInt8);
      console.log(`LogicSigAccount created for Escrow: ${escrow}`);
  
      // Attempt to fund the project and opt-in
      console.log(`Attempting to fund project and opt-in...`);
      await fundProjectAndOptInAction(sender, escrow, project, amount);
  
      // Log the donation action to Firestore
      console.log(`Logging donation action to Firestore...`);
      await firestoreDonateAction(sender, project.appId, amount);
  
      // If everything goes well, display a success message
      console.log(`Donation completed successfully for project: ${project.name}`);
      toast.success("Donation completed successfully!", {
        position: 'bottom-center'
      });
    } catch (error) {
      // Log any errors that occur during the donation process
      console.error("Error during donation process:", error);
      toast.error(`Could not donate to the project: ${error.message}`, {
        position: 'bottom-center'
      });
    }
  };
  

export const claimFundsFromProject = async(sender, project) => {
    let escrowUInt8 = Uint8Array.from(project.escrow.split(',').map(x=>parseInt(x,10)))
    let escrow = new algosdk.LogicSigAccount(escrowUInt8)

    claimFundstAction(sender, escrow, project).then(() =>{
        project.claimed = true
        firestoreInsertInfoAction(project).then(() =>
        toast.success("Successfully claimed the donations!", {
            position: 'bottom-center'})
        )}).catch(err => {
            console.log(err);
            toast.error("Could not claim the funds", {
                position: 'bottom-center'
            });});
};

export const askRefundFromProject = async(sender, project) => {
    let escrowUInt8 = Uint8Array.from(project.escrow.split(',').map(x=>parseInt(x,10)))
    let escrow = new algosdk.LogicSigAccount(escrowUInt8)

    refundUserAction(sender, escrow, project).then((amount) =>{
        firestoreDonateAction(sender, project.appId, -microalgosToAlgos(amount)).then(() =>
        toast.success("Refund obtained successfully!", {
            position: 'bottom-center'})
        )}).catch(error =>{
            console.log(error);
            toast.error("Could not obtain a refund", {
                position: 'bottom-center'
        });});
};