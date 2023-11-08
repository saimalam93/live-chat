import { auth, provider } from "./firebase.config";
import { signInWithPopup } from "firebase/auth";

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.log(err);
  }
};

const signOut = async () => {
  await auth.signOut();
};

export { signInWithGoogle, signOut };
