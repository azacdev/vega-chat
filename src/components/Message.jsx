/* eslint-disable react/prop-types */

const Message = ({ message: { name, text, avatar} }) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={avatar} />
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
