import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase.config";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewRoomModal = ({ setOpen }: Props) => {
  const [newRoom, setNewRoom] = useState("");
  const roomsRef = collection(db, "rooms");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newRoom) return;
    const room = {
      name: newRoom,
      createdAt: new Date(),
      createdBy: auth.currentUser?.displayName,
    };
    addDoc(roomsRef, room);
    setNewRoom("");
    setOpen(false);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 backdrop-blur-lg">
        {/* Background overlay, show/hide based on modal state. */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        ></div>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        {/* Modal panel, show/hide based on modal state. */}
        <div
          className="inline-block align-bottom bg-whiterounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Close button */}
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              className="group relative w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={() => setOpen(false)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#e30e0e"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Create room form */}
          <form className="w-full max-w-lg p-4" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold text-gray-600 text-center mb-2">
              Create a New Room
            </h1>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Room Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Enter Room Name"
                  onChange={(e) => setNewRoom(e.target.value)}
                  value={newRoom}
                />
                <p className="text-gray-600 text-xs italic">
                  This will be the name of your room.
                </p>
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto block"
              type="submit"
            >
              Create Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRoomModal;
