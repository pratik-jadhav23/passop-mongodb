// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <nav className='flex justify-between items-center p-5 bg-white'>
//             <div className='logo font-bold  text-2xl'>
//                 <span>&lt;</span>
//                 Pass<span className='text-purple-900'>OP/</span>
//                 <span>&gt;</span>
//             </div>
//             <ul className='flex space-x-5'>
//                     <NavLink  to="/"><li>Home</li></NavLink>
//                     <NavLink  to="/about"><li>About</li></NavLink>
//                     <NavLink  to="/login"><li>Login</li></NavLink>
//             </ul>
//         </nav>
//     )
// }

// export default Navbar

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        // Toggle the active link on click
        console.log("handlelickclick ()");
        
        setActiveLink(link === activeLink ? null : link);
    };

    return (
        <nav className='flex justify-between items-center p-5 bg-white'>
            <div className='logo font-bold text-2xl'>
                <span>&lt;</span>
                Pass<span className='text-purple-900'>OP/</span>
                <span>&gt;</span>
            </div>
            <ul className='flex space-x-5'>
                <NavLink 
                    to="/" 
                    className={`text-purple-900 hover:text-purple-600 transition-all duration-200 
                        ${activeLink === 'home' ? 'text-purple-700' : ''}`}
                    onClick={() => handleLinkClick('home')}
                >
                    <li>Home</li>
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={`text-purple-900 hover:text-purple-600 transition-all duration-200 
                        ${activeLink === 'about' ? 'text-purple-700' : ''}`}
                    onClick={() => handleLinkClick('about')}
                >
                    <li>About</li>
                </NavLink>
                <NavLink 
                    to="/login" 
                    className={`text-purple-900 hover:text-purple-600 transition-all duration-200 
                        ${activeLink === 'login' ? 'text-purple-700' : ''}`}
                    onClick={() => handleLinkClick('login')}
                >
                    <li>Login</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
