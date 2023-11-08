import { Link } from "react-router-dom";
import Card from "./Card";
import { User as FirebaseUser } from "firebase/auth";
import { db } from "../firebase.config";
import { Room } from "../types/rooms.types";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import UserList from "./UserList";

type Props = {
  user: FirebaseUser | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const RoomsList = ({ user, setOpen }: Props) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const roomsRef = collection(db, "rooms");

  useEffect(() => {
    const queryRooms = query(roomsRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(queryRooms, (snapshot) => {
      const rooms: Room[] = [];
      snapshot.forEach((doc) => {
        rooms.push({ ...doc.data(), id: doc.id } as Room);
      });
      setRooms(rooms);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="flex justify-between flex-col-reverse md:flex-row lg:flex-row">
      {user && (
        <div className="flex justify-end fixed bottom-0 right-0 mr-4 mb-4 z-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setOpen(true)}
          >
            New Room
          </button>
        </div>
      )}
      <div className="container mx-auto px-4 my-2 w-full md:w-1/4 lg:w-1/4 border-r border-[#ffffff12] shadow-2xl min-h-screen">
        <UserList />
      </div>
      <div className="container mx-auto px-4 my-2">
        <h1 className="text-3xl font-bold text-white text-center my-8 border-b border-white">
          Available Rooms
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {rooms.map(
            (room) =>
              room.id && (
                <Link to={`/room/${room.id}`} key={room.id}>
                  <Card room={room} />
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomsList;
