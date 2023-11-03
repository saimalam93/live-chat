import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/10/07/21/chat-2389223_1280.png"
          alt="Helping Hand"
          className="w-16"
        />
        <p className="text-black text-2xl">Let's Chat</p>
      </div>
    </Link>
  );
};

export default Logo;
