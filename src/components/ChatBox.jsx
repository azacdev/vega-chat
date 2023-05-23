import { useEffect } from "react";
import Message from "./Message";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "Hello There Anakin",
      name: "Azacdev",
    },
    {
      id: 2,
      text: "Now you'll die Obiwan",
      name: "Monarch",
    },
  ];

  useEffect(() => {
    const q = query(
      collection(db, "messages")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        // messages.push(doc.data().name);
        console.log(doc.data());
      });
    });
  }, []);

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
