import { auth } from "./firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const [user] = useAuthState(auth);

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

const signOut = async () => {
  await auth.signOut();
};

export { useAuthState, signInWithGoogle, signOut };
