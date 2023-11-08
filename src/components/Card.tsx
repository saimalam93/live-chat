import { Room } from "../types/rooms.types";

type Props = {
  room: Room;
};

const Card = ({ room }: Props) => {
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden p-2 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="flex-shrink-0 my-4">
          <div className="flex justify-center border-b-2">
            <p className="text-2xl font-bold my-4 text-gray-600">{room.name}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p
              className="text-xs italic mt-2 text-gray-600 font-thin tracking-tight
            
            "
            >
              Created by {room.createdBy}
            </p>
            <p className="text-xs italic text-gray-600 font-thin tracking-tight">
              {room.createdAt.toDate().toLocaleDateString("en-us", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
