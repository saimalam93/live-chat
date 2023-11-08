import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import UserCard from "./UserCard";
import { User } from "../types/users.types";

//Query all users from firebase and display them in a list

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const usersRef = collection(db, "users");

  useEffect(() => {
    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      const users: User[] = [];
      snapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id } as User);
      });
      setUsers(users);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center my-8 border-b border-white">
        All Users
      </h1>
      {/* user Card with profile picture and name */}
      <div className="flex flex-col justify-center items-center">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default UserList;
