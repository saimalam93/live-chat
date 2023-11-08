import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import RoomsList from "./components/RoomsList";
import NewRoomModal from "./components/NewRoomModal";
import { auth, db } from "./firebase.config";
import { User as FirebaseUser } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { User } from "./types/users.types";

function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [open, setOpen] = useState(false);

  const userRef = collection(db, "users");
  // const userRef = doc(db, "users");

  const newUser: User = {
    id: "",
    name: "",
    email: "",
    avatar: "",
    createdAt: "",
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        newUser.id = user.uid;
        newUser.name = user.displayName || "";
        newUser.email = user.email || "";
        newUser.avatar = user.photoURL || "";
        newUser.createdAt = user.metadata.creationTime || "";

        const queryUser = query(userRef, where("id", "==", user.uid));
        const unsubscribe = onSnapshot(queryUser, (snapshot) => {
          if (snapshot.empty) {
            addDoc(userRef, newUser);
          }
        });
        return unsubscribe;
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<RoomsList user={user} setOpen={setOpen} />} />
        <Route path="/room/:id" element={<Chat />} />
      </Routes>
      {open && <NewRoomModal setOpen={setOpen} />}
    </>
  );
}

export default App;
