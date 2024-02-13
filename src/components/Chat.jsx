import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, store } from "../firebase/config";

const Chat = (props) => {
  const msgRef = collection(store, "messages");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const queryMsg = query(msgRef, where("room", "==", props.room));
    const unsubs = onSnapshot(queryMsg, (snapshot) => {
      let message = [];
      snapshot.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessages(message);
      console.log(messages);
    });
    return () => unsubs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(msgRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: props.room,
    });
    setNewMessage("");
  };
  return (
    <div>
      <div>
        {messages.map((msg) => (
          <h2>{msg.text}</h2>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type your message"
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Chat;
