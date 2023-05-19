import './App.css'
import Navbar from './components/Navbar'
import ChatRoom from './pages/ChatRoom'
import Login from './pages/Login'
function App() {

  return (
    <div className='App'>
      <Navbar />
      {/* <Login /> */}
      <ChatRoom />
    </div>
  )
}

export default App
