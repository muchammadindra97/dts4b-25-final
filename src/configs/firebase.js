import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FC_API_KEY,
  authDomain: process.env.REACT_APP_FC_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FC_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FC_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FC_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FC_ID_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };