import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  addDoc,
  setDoc,
  doc,
  collection,
  increment,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import { crowdfundingProject } from "./crowdfunding";
import { microalgosToAlgos } from "algosdk";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyDv2LrT5EB-iME_aPSSzkc_tDemjlo6PTg",
  authDomain: "algo-crowdfund.firebaseapp.com",
  databaseURL: "https://algo-crowdfund-default-rtdb.firebaseio.com",
  projectId: "algo-crowdfund",
  storageBucket: "algo-crowdfund.appspot.com",
  messagingSenderId: "682914167468",
  appId: "1:682914167468:web:d3e644c7134f01cb58bd09"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

const projectsCollection = collection(firestore, "projects");
const donationCollection = collection(firestore, "donations");

// Should be used for both create and update
export const firestoreInsertInfoAction = async (project) => {
  const collectionName = "projects";
  const document = doc(firestore, collectionName, project.appId.toString());
  setDoc(document, Object.assign({}, project), { merge: true })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const firestoreDonateAction = async (sender, appId, amount) => {
  const projDocument = doc(firestore, "projects", appId.toString());
  updateDoc(projDocument, { current_amount: increment(amount) })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
  addDoc(donationCollection, {
    sender: sender,
    appId: appId,
    amount: microalgosToAlgos(amount),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const firestoreDeleteAction = async (project) => {
  const projDocument = doc(firestore, "projects", project.appId);
  updateDoc(projDocument, { deleted: true })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const firestoreGetProjectAction = async (appId) => {
  const document = doc(firestore, "projects", appId.toString());
  const data = (await getDoc(document)).data();
  return new crowdfundingProject(
    data.name,
    data.image,
    data.description,
    data.goal,
    data.startDate,
    data.endDate,
    data.creator,
    data.isSponsored,
    data.current_amount,
    data.appId,
    data.escrow,
    data.deleted,
    data.claimed,
    data.platform
  );
};

export const firestoreGetAllProjectsAction = async () => {
  const snapshot = await getDocs(projectsCollection);
  return snapshot.docs.map((doc) => {
    let data = doc.data();
    return new crowdfundingProject(
      data.name,
      data.image,
      data.description,
      data.goal,
      data.startDate,
      data.endDate,
      data.creator,
      data.isSponsored,
      data.current_amount,
      data.appId,
      data.escrow,
      data.deleted,
      data.claimed,
      data.platform
    );
  });
};

const firestoreGetProjectsForQuery = async (query) => {
  const snapshot = await getDocs(query);
  return snapshot.docs.map((doc) => {
    let data = doc.data();
    return new crowdfundingProject(
      data.name,
      data.image,
      data.description,
      data.goal,
      data.startDate,
      data.endDate,
      data.creator,
      data.isSponsored,
      data.current_amount,
      data.appId,
      data.escrow,
      data.deleted,
      data.claimed,
      data.platform
    );
  });
};

export const firestoreGetSponsoredProjectsAction = async () => {
  const sponsoredQuery = query(
    projectsCollection,
    where("isSponsored", "==", true)
  );
  return await firestoreGetProjectsForQuery(sponsoredQuery);
};

export const firestoreGetFundedProjectsAction = async (address) => {
  const fundedQuery = query(donationCollection, where("sender", "==", address));
  const snapshot = await getDocs(fundedQuery);
  const appIds = snapshot.docs.map((doc) => {
    console.log(doc.data());
    let data = doc.data();
    return data.appId;
  });
  const queryProj = query(projectsCollection, where("appId", "in", appIds));
  return await firestoreGetProjectsForQuery(queryProj);
};

export const firestoreGetCreatedProjectsAction = async (address) => {
  const createdQuery = query(
    projectsCollection,
    where("creator", "==", address)
  );
  return await firestoreGetProjectsForQuery(createdQuery);
};

// TODO: add firebaseGetSponsoredProjectsAction, add firebaseGetFundedProjectAction, add firebaseGetCreatedProject action

export const logAllDataAsJson = async () => {
  try {
    // Fetch all projects
    const projectSnapshot = await getDocs(projectsCollection);
    const projects = projectSnapshot.docs.map((doc) => doc.data());

    // Fetch all donations
    const donationSnapshot = await getDocs(donationCollection);
    const donations = donationSnapshot.docs.map((doc) => doc.data());

    // Log projects and donations as JSON
    console.log("projects:", JSON.stringify(projects, null, 2));
    console.log("donations:", JSON.stringify(donations, null, 2));
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
  }
};

export const pushDataToFirestore = async (data) => {
  try {
    // Push Donations
    const donationsCollection = collection(firestore, "donations");
    for (const donation of data.Donations) {
      await addDoc(donationsCollection, donation);
    }

    // Push Projects
    const projectsCollection = collection(firestore, "projects");
    for (const project of data.Projects) {
      await addDoc(projectsCollection, project);
    }

    console.log("Data added successfully!");
  } catch (error) {
    console.error("Error adding data: ", error);
  }
};

export const sampleData = {
  Donations: [
    {
      appId: 115076689,
      sender: "QFO4LF45GLWQNMYXBGJXSHQLKSPRLS6RDAE3KUPPDWZROPKAD2H5QKER64",
      amount: 2,
    },
  ],
  Projects: [
    {
      creator: "QFO4LF45GLWQNMYXBGJXSHQLKSPRLS6RDAE3KUPPDWZROPKAD2H5QKER64",
      claimed: false,
      deleted: false,
      current_amount: 2000000,
      appId: 115076689,
      goal: 2000000,
      platform: "UOFKRF6BIGRBYW2TUKKUBC24PWOA6GNM62ZIA77IBBT5RMYRPR3W25XPPQ",
      endDate: 1665167040,
      escrow:
        "6,50,4,129,2,18,51,0,16,129,6,18,16,51,0,24,129,209,220,239,54,18,16,51,0,25,129,0,18,51,0,25,129,5,18,17,16,51,0,32,50,3,18,51,1,32,50,3,18,16,16,67",
      isSponsored: true,
      image:
        "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "La Contea Gentile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor nisi ut ligula pretium congue. Phasellus convallis, odio quis vestibulum tristique, enim tellus eleifend tortor, at tempus magna ligula at quam. Pellentesque nec imperdiet mi, sed volutpat turpis. Ut dapibus enim a risus vulputate, et finibus sem congue. Vestibulum vehicula semper sapien, egestas lacinia diam elementum sed. Etiam id magna enim. Donec fringilla semper neque, suscipit maximus ligula gravida finibus. Duis est arcu, ullamcorper a tortor at, cursus sodales augue. Sed tincidunt congue lorem, vel aliquet urna aliquet et. Fusce mauris neque, convallis ut nulla eu, dapibus sodales nisi. Praesent elementum ligula dui, eu convallis metus porttitor sed. Aliquam metus nisl, efficitur lacinia neque ac, imperdiet convallis massa. Donec at rhoncus lorem.\n\nMaecenas a volutpat libero. Pellentesque sagittis libero elit, in tempus justo dapibus ac. Vivamus ut tempus erat. Donec vitae enim commodo, finibus neque in, luctus lacus. Cras in ultricies ligula, facilisis volutpat sapien. Integer dapibus eros velit, eu cursus urna posuere eu. Donec varius dui vel sagittis efficitur. Mauris placerat turpis a nibh lacinia ultrices. Morbi condimentum dui at iaculis dictum. Proin libero mauris, mattis in augue quis, scelerisque aliquet justo. Suspendisse sed dui in nibh ultricies ornare. Phasellus suscipit purus vel varius eleifend.",
      startDate: 1665166620,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis pretium nibh sed consectetur. Quisque quis ligula dolor. Morbi dignissim, lorem sed fermentum placerat, velit leo scelerisque augue, ac imperdiet sem nisl a leo. Vestibulum sed auctor sem. Cras interdum justo sit amet quam interdum, a scelerisque ante ultrices. Sed scelerisque, ex tempor maximus ullamcorper, velit ex ullamcorper enim, vitae faucibus mi dui id quam. Nam viverra, nunc in lacinia rutrum, neque est vehicula lectus, id consequat lectus ligula eget ex.\n\nVestibulum ut elementum ipsum. Integer maximus laoreet elit, vel aliquet neque vestibulum sed. Aenean non sapien nec urna pulvinar gravida. Sed auctor felis pretium quam venenatis, ac volutpat turpis venenatis. Phasellus nec convallis ipsum. Phasellus varius nunc enim, vestibulum scelerisque nunc auctor eu. Proin auctor nisi ac lacus vulputate pellentesque. Nullam mi felis, tempor varius vehicula et, tristique sed urna. Proin id tellus vitae mauris imperdiet imperdiet.\n\nInteger malesuada justo id arcu scelerisque pretium. Quisque commodo, leo nec egestas vulputate, enim nibh commodo metus, vel ultricies nibh leo sit amet ipsum. Duis et dignissim dui. Aenean accumsan lacinia commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt rutrum est, quis condimentum urna malesuada nec. Nullam magna enim, fermentum luctus tincidunt vitae, cursus quis dolor. Duis mattis dui et justo suscipit, ut convallis dolor consectetur. Ut elementum porttitor urna nec dictum. Maecenas nec nibh efficitur, dapibus lorem nec, iaculis lacus. Sed tempus ligula ac sem tempus dapibus. Morbi consectetur massa eu finibus fermentum. Donec commodo commodo gravida. Aliquam quis condimentum erat.",
      endDate: 1665167100,
      escrow:
        "6,50,4,129,2,18,51,0,16,129,6,18,16,51,0,24,129,244,222,239,54,18,16,51,0,25,129,0,18,51,0,25,129,5,18,17,16,51,0,32,50,3,18,51,1,32,50,3,18,16,16,67",
      platform: "UOFKRF6BIGRBYW2TUKKUBC24PWOA6GNM62ZIA77IBBT5RMYRPR3W25XPPQ",
      name: "The Hogwarts Experience",
      goal: 10000000,
      appId: 115076980,
      current_amount: 0,
      startDate: 1665166800,
      creator: "QFO4LF45GLWQNMYXBGJXSHQLKSPRLS6RDAE3KUPPDWZROPKAD2H5QKER64",
      claimed: false,
      isSponsored: false,
      deleted: false,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    },
    {
      goal: 12000000,
      escrow:
        "6,50,4,129,2,18,51,0,16,129,6,18,16,51,0,24,129,160,226,239,54,18,16,51,0,25,129,0,18,51,0,25,129,5,18,17,16,51,0,32,50,3,18,51,1,32,50,3,18,16,16,67",
      creator: "QFO4LF45GLWQNMYXBGJXSHQLKSPRLS6RDAE3KUPPDWZROPKAD2H5QKER64",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque vel ante ultricies bibendum vel ac purus. In elementum faucibus aliquet. Donec mattis ipsum vitae mi ultricies accumsan. Sed laoreet erat in ex porttitor, sed finibus ex venenatis. Sed posuere mauris turpis, at ornare quam venenatis ac. Vestibulum vel nibh turpis. Suspendisse potenti. Praesent vulputate, urna id commodo hendrerit, magna metus semper mauris, vitae faucibus arcu enim eget leo. Suspendisse potenti. Duis ac elementum ligula. Vivamus ac maximus libero. Curabitur in aliquet lorem.",
      name: "A Special Retreat",
      isSponsored: true,
      startDate: 1665167040,
      claimed: false,
      platform: "UOFKRF6BIGRBYW2TUKKUBC24PWOA6GNM62ZIA77IBBT5RMYRPR3W25XPPQ",
      appId: 115077408,
      image:
        "https://images.unsplash.com/photo-1566013656433-e818796d04f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      endDate: 1682805600,
      current_amount: 0,
      deleted: false,
    },
    {
      deleted: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar lobortis odio. Nam elit quam, viverra ac arcu vel, pulvinar venenatis turpis. Donec ut elit est. Pellentesque et quam leo. Sed rhoncus enim arcu, ut cursus libero dapibus non. Quisque bibendum gravida enim id imperdiet. Quisque enim felis, sollicitudin imperdiet posuere rhoncus, faucibus ac lorem. Quisque at ligula dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam a lectus quam. Etiam quis erat metus. Nunc congue lorem ante, eget blandit eros ullamcorper id. Duis a dui lacus. Donec varius neque erat, sit amet aliquet nisl varius fringilla.\n\nVestibulum id consequat ipsum. Nunc pretium velit ut augue iaculis, vel bibendum eros fermentum. Donec ornare accumsan est. Donec nec massa eu quam fermentum condimentum vulputate sed metus. In tincidunt, tellus nec molestie pharetra, dolor tortor gravida metus, et fermentum felis ligula at nisl. Integer ut vulputate turpis, eu facilisis neque. Phasellus tortor turpis, sollicitudin in dolor at, semper mollis metus.",
      platform: "UOFKRF6BIGRBYW2TUKKUBC24PWOA6GNM62ZIA77IBBT5RMYRPR3W25XPPQ",
      image:
        "https://images.unsplash.com/photo-1508995476428-43d70c3d0042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFsbG93ZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      appId: 115077688,
      endDate: 1698706800,
      goal: 6000000,
      claimed: false,
      escrow:
        "6,50,4,129,2,18,51,0,16,129,6,18,16,51,0,24,129,184,228,239,54,18,16,51,0,25,129,0,18,51,0,25,129,5,18,17,16,51,0,32,50,3,18,51,1,32,50,3,18,16,16,67",
      creator: "QFO4LF45GLWQNMYXBGJXSHQLKSPRLS6RDAE3KUPPDWZROPKAD2H5QKER64",
      isSponsored: false,
      name: "Halloween Special",
      current_amount: 0,
      startDate: 1696024800,
    },
  ],
};

// pushDataToFirestore(sampleData);
