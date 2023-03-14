import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDJEmnPs49DFlaWy2WfNlneDp1KEREtaDk",
  authDomain: "ai-chat-2-e5742.firebaseapp.com",
  projectId: "ai-chat-2-e5742",
  storageBucket: "ai-chat-2-e5742.appspot.com",
  messagingSenderId: "913380571654",
  appId: "1:913380571654:web:756ff23b41c7d33b752187",
};

const app = getApps.length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
