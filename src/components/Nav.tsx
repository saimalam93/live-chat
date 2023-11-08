import { signInWithGoogle, signOut } from "../auth";
import Logo from "./Logo";
import { User as FirebaseUser } from "firebase/auth";

type Props = {
  user: FirebaseUser | null;
};

const Nav = ({ user }: Props) => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between bg-white shadow-[10px_10px_15px_15px_rgba(0,0,0,0.3)] sticky top-0 z-10">
      <Logo />
      <div className="flex flex-row items-center justify-between">
        {user === null ? (
          <button
            className="bg-slate-100 hover:bg-gray-200 hover:text-black text-gray-500 font-bold py-2 px-8 rounded text-slate-800 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] mr-4 mb-4 lg:mb-0"
            onClick={signInWithGoogle}
          >
            <img
              src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
              alt="google logo"
              className="h-6 w-6 inline-block mr-2"
            />{" "}
            Sign In With Google
          </button>
        ) : (
          <button
            className="bg-slate-100 hover:bg-gray-200 hover:text-black text-gray-500 font-bold py-2 px-8 rounded text-slate-800 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] mr-4 mb-4 lg:mb-0"
            onClick={signOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
