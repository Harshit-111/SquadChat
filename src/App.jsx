import React, { useState, useRef } from "react";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";

const cookie = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookie.get("authToken"));
  const [room, setRoom] = useState(null);
  const roomRef = useRef(null);
  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div>
          <label htmlFor="">Enter Room Name</label>
          <input type="text" ref={roomRef} />
          <button onClick={() => setRoom(roomRef.current.value)}>
            enter Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
