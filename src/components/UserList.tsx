import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
// import { User } from "../types/users.types";
import { auth } from "../firebase.config";
import UserCard from "./UserCard";

//Query all users from firebase and display them in a list

const UserList = () => {
  // const [users, setUsers] = useState<User[]>([]);
  // const usersRef = collection(db, "users");
  // const [user, setUser] = useState<firebase.User | null>(null);

  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center my-8 border-b border-white">
        All Users
      </h1>
      {/* user Card with profile picture and name */}
      <div className="flex flex-col justify-center items-center">
        <UserCard />
      </div>
    </>
  );
};

export default UserList;
