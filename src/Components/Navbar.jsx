import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-white'>
            <div className='logo font-bold  text-2xl'>
                <span>&lt;</span>
                Pass<span className='text-purple-900'>OP/</span>
                <span>&gt;</span>
            </div>
            <ul className='flex space-x-5'>
                    <NavLink  to="/"><li>Home</li></NavLink>
                    <NavLink  to="/about"><li>About</li></NavLink>
                    <NavLink  to="/login"><li>Login</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
