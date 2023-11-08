import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiPnJZ7tr6MsOanGZjvuZjQ7QBAeD-PXE",
  authDomain: "live-chat-14c78.firebaseapp.com",
  projectId: "live-chat-14c78",
  storageBucket: "live-chat-14c78.appspot.com",
  messagingSenderId: "352879875787",
  appId: "1:352879875787:web:3c954506efc5a3aa82ad4e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
