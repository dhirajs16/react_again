import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <>
        <div className="h-[10vh] w-screen bg-cyan-200 flex items-center justify-center gap-5 rounded-b-lg">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    </>
  )
}

export default Navbar