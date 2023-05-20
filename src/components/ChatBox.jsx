import Message from "./Message"

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "Hello There Anakin",
      name: "Azacdev"
    },
    {
      id: 2,
      text: "Now you'll die Obiwan",
      name: "Monarch"
    }
  ]

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map(message => (
       <Message key={message.id} message={message}/>
      ))}
    </div>
  )
}

export default ChatBox