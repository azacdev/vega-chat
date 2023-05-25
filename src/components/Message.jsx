/* eslint-disable react/prop-types */

import { UserAuth } from "../context/AuthContext";

const Message = ({ message: { uid, name, text, avatar} }) => {
  const { currentUser } = UserAuth()
  return (
    <div>
      <div className={uid === currentUser.uid ? "chat chat-end" : "chat chat-start"}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={avatar}/>
          </div>
        </div>
        <div className="chat-header">
          {name}
        </div>
        <div className="chat-bubble">{text}</div>
      </div>
    </div>
  );
};

export default Message;
