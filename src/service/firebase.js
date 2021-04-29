import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEINGSENDERID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebaseApp;
