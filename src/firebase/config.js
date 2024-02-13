import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4dDm-IuxviIUOrmJdVMDpqLxyXP2dtpc",
  authDomain: "chatapp-2e707.firebaseapp.com",
  projectId: "chatapp-2e707",
  storageBucket: "chatapp-2e707.appspot.com",
  messagingSenderId: "35376867610",
  appId: "1:35376867610:web:fd5993d9edd8f5682fa4a3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const provider = new GoogleAuthProvider();
