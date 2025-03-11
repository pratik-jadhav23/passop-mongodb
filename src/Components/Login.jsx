import React, { useState, useEffect } from 'react'
import Button from './Button'
import ButtonWithImage from './ButtonWithImage'
import SimpleButtonWithText from './SimpleButtonWithText'
import SubmitButton from './SubmitButton'
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate();
    const [usersArray, setusersArray] = useState([])

    const users = async () => {
        let req = await fetch("http://localhost:3000/signup")
        let users = await req.json()
        setusersArray(users)
    }

    useEffect(() => {
        users()
    }, [])

    const LoginFunction = (event) => { 
        event.preventDefault();
        console.log('login clicked users = ', usersArray);
        
     }

     const handleSignup = () => {
        navigate('/signup'); 
     }
     


    return (
        <div >
            {/* Background */}
            {/* <div className="fixed left-0 top-0 -z-10 h-full w-full">
                <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </div> */}
            <div className=' w-full flex justify-center items-center h-screen bg-gradient-to-br from-purple-100 to-purple-300'>
                <div className='md:w-3/10 bg-white rounded-md shadow-lg max-sm:h-9/10'>
                    <div className='p-10'>
                        <h1 className='text-4xl font-bold text-center'>
                            <span>&lt;</span>
                            <span>Pass</span>
                            <span className='text-purple-900'>OP/</span>
                            <span>&gt;</span>
                            <p className='font-normal text-base'>Your Own Password Manager</p>
                        </h1>
                    </div>
                    <div className='p-4'>
                        <form action="" onSubmit={LoginFunction}>
                            <fieldset>
                                <legend className='text-4xl font-bold pb-4'>Secure Login</legend>
                                <div className='p-1' >
                                    <label htmlFor="email" className='pr-1'>Email Address</label>
                                    <input type="email" name="email" id="email" className='border-1 border-purple-500 rounded-sm  pl-1' placeholder='Enter Email' required />
                                </div>
                                <div className='md:flex justify-between items-center p-1'>
                                    <div>
                                        <label htmlFor="password" className='pr-1 '>Password</label>
                                        <input type="password" name="password" id="password" className='border-1 border-purple-500 rounded-sm pl-1' placeholder='Enter Password' required />
                                    </div>
                                    <div className='text-center'>
                                        <SimpleButtonWithText text={"Forgot?"} />
                                    </div>
                                </div>
                                <div className='p-2 flex justify-center'>
                                    <SubmitButton text={"Login"} />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    {/* <div className='text-center pb-2'>or</div> */}
                    {/* <div className='flex justify-center items-center p-2'>
                        <ButtonWithImage text={"Sign in with Google"} imgSrc={"icons/google.svg"} />
                    </div> */}
                    <div className='flex justify-center gap-2 p-2'>
                        Not a member yet? <button onClick={handleSignup} className='text-purple-500 hover:cursor-pointer'>Signup</button> 
                    </div>
                    <div className='pb-4 flex justify-center items-center'>
                        <label for="fruits" className='p-2'>Language: </label>
                        <select name="fruits" id="fruits">
                            <option value="apple">English</option>
                            <option value="banana">Hindi</option>
                            <option value="orange">Marathi</option>
                            <option value="grape">German</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
