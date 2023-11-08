const UserCard = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full shadow-2xl rounded-md p-2">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
          alt="google logo"
          className="h-9 w-9 inline-block mr-2 rounded-full"
        />
        <div className="flex flex-col justify-center grow">
          <p className="font-semibold text-white">John Doe</p>
          <p className="text-xs text-slate-300 mt-1 italic">
            saimalam.work@gmail.com
          </p>
          <p className="text-[10px] text-gray-600 tracking-tighter mt-1">
            Joined On : 23-11-2023
          </p>
        </div>
      </div>
      <hr className="w-full border-[#ffffff12] my-4" />
    </>
  );
};

export default UserCard;
