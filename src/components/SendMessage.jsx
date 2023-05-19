import { useState } from "react"

const SendMessage = () => {
  const [value, setValue] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    console.log(value)
    setValue("")
  }

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-small">Send</button>
      </form>
    </div>
  )
}

export default SendMessage