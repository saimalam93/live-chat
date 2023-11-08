import { User } from "../types/users.types";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full shadow-2xl rounded-md p-2">
        <img
          src={user.avatar}
          alt="user avatar"
          className="h-9 w-9 inline-block mr-2 rounded-full"
        />
        <div className="flex flex-col justify-center grow">
          <p className="font-semibold text-white">{user.name}</p>
          <p className="text-xs text-slate-300 mt-1 italic">{user.email}</p>
          <p className="text-[10px] text-gray-600 tracking-tighter mt-1">
            Joined On : {user.createdAt.slice(0, 16)}
          </p>
        </div>
      </div>
      <hr className="w-full border-[#ffffff12] my-4" />
    </>
  );
};

export default UserCard;
