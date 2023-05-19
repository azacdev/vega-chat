import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">VegaChat</a>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar