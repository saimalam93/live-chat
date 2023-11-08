import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase.config";
import { Message } from "../types/messages.types";
import Messages from "./Messages";

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const { id } = useParams<{ id: string }>();

  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState<Message[]>([]);

  const [roomName, setRoomName] = useState("");
  const roomsRef = collection(db, "rooms");

  useEffect(() => {
    const unsubscribe = onSnapshot(roomsRef, (snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.id === id) {
          setRoomName(doc.data().name);
        }
      });
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("roomId", "==", id),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      const messages: Message[] = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id } as Message);
      });
      setMessages(messages);
    });
    return unsubscribe;
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newMessage) return;
    const message = {
      text: newMessage,
      createdAt: new Date(),
      sender: auth.currentUser?.displayName,
      roomId: id,
    };
    addDoc(messagesRef, message);
    setNewMessage("");
  };

  return (
    <>
      <div className="flex">
        <span
          className="text-xl font-bold text-white cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out"
          onClick={() => window.history.back()}
        >
          &#8592;
        </span>
      </div>
      <h1 className="text-3xl font-bold text-white text-center sticky top-[120px] lg:top-24 backdrop-blur-sm lg:backdrop-blur-none tracking-widest">
        {roomName}
      </h1>
      <div className="flex flex-col-reverse gap-4 overflow-y-auto mb-20">
        {messages.map((message) => (
          <Messages message={message} key={message.id} />
        ))}
      </div>
      {auth.currentUser !== null ? (
        <div className="container fixed bottom-0 left-0 w-full px-4 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="flex-grow flex  mb-4">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-grow px-4 py-2 rounded-l-lg border-2 border-r-0 border-gray-300 focus:outline-none focus:ring"
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
            />

            <button
              type="submit"
              className="px-4 rounded-r-lg bg-blue-500 text-white font-bold p-2"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <p className="text-gray-600 text-sm text-center my-8 bg-gray-100 p-4">
          Sign in to chat
        </p>
      )}
    </>
  );
};

export default Chat;
