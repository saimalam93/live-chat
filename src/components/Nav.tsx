import Logo from "./Logo";

type Props = {};

const Nav = ({}: Props) => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between bg-white shadow-[10px_10px_15px_15px_rgba(0,0,0,0.3)] sticky top-0 z-10">
      <Logo />
      {/* {google logo button to signin with google} */}
      <div className="flex flex-row items-center justify-between">
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In With{" "}
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google Logo"
            className="w-24"
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
