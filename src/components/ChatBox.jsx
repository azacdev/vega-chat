import { useEffect } from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot } from "firebase/firestore";

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
    const q = query(collection(db, "cities"), where("state", "==", "CA"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data().name);
      });
      console.log("Current cities in CA: ", cities.join(", "));
    });
  });

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
