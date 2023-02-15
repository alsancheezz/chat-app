import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMsg = ({scroll}) => {
 const [message, setMessage] = useState("");

 const sendMessage = async (event) => {
  event.preventDefault();
  if (message.trim() === "") {
    alert("Enter valid message");
    return;
  }
  const { uid, displayName } = auth.currentUser;
  await addDoc(collection(db, "messages"), {
    text: message,
    name: displayName,
    createdAt: serverTimestamp(),
    uid,
  });
  setMessage("");
  scroll.current.scrollIntoView({ behavior: "smooth" });
};
  
return (
  <form onSubmit={(e) => sendMessage(e)} className="send-message">
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}/>
    <button type="submit">Send</button>
  </form>
);
};

export default SendMsg