import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import RoomsList from "./components/RoomsList";
import NewRoomModal from "./components/NewRoomModal";
import { auth } from "./firebase.config";
import { User as FirebaseUser } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
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
