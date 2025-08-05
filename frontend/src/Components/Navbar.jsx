import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex justify-between mt-3">
        <h1 className='ml-5 text-2xl font-extrabold'>NoteNest</h1>
    <nav className='flex gap-10 mr-5 '>
        <Link to="/home"href="">Home</Link>
        <a href="/form">Create Notes</a>
        <Link to="/events"href="">All Notes</Link>
    </nav>
    </div>
  )
}

export default Navbar