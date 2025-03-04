import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-5 bg-white'>
            <div className='logo font-bold  text-2xl'>
               <span>&lt;</span>
                Pass<span className='text-purple-900'>OP/</span>
                <span>&gt;</span>
            </div>
            <ul>
                <li className='flex space-x-5'>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
