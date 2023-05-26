import { useState } from "react"
import { UserAuth } from "../context/AuthContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"

const SendMessage = () => {
  const [value, setValue] = useState("")
  const { currentUser } = UserAuth()

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if(value.trim() === "") {
      alert("Enter valid message!")
      return
    }
    try {
      const {uid, photoURL, displayName } = currentUser
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createAt: serverTimestamp(),
        uid
      })
    } catch (error) {
      console.log(error);
    }
    setValue("")
  }

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input className="input w-full text-black focus:outline-none bg-gray-100 rounded-r-none" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-small">Send</button>
      </form>
    </div>
  )
}

export default SendMessage