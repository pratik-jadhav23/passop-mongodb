### to run frontend/src folder use "npm run dev"
### to run backend - "node --watch server.js"

[
   {
    "email": "jadhavp785@example.com",
    "firstName": "pratik",
    "lastName": "Jadhav",
    "password": "123456"
  },
  {
    "email": "jane.doe@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "password": "securePass123"
  },
  {
    "email": "john.smith@example.com",
    "firstName": "John",
    "lastName": "Smith",
    "password": "anotherSecurePass"
  },
    {
    "email": "emily.jones@example.com",
    "firstName": "Emily",
    "lastName": "Jones",
    "password": "password456"
  },
  {
    "email": "david.lee@example.com",
    "firstName": "David",
    "lastName": "Lee",
    "password": "strongPass789"
  },
  {
    "email": "sarah.brown@example.com",
    "firstName": "Sarah",
    "lastName": "Brown",
    "password": "mySecret101"
  },
  {
    "email": "michael.davis@example.com",
    "firstName": "Michael",
    "lastName": "Davis",
    "password": "passphrase1234"
  },
    {
    "email": "jessica.wilson@example.com",
    "firstName": "Jessica",
    "lastName": "Wilson",
    "password": "uniquePassword5678"
  },
    {
    "email": "christopher.garcia@example.com",
    "firstName": "Christopher",
    "lastName": "Garcia",
    "password": "complexPass9012"
  },
  {
    "email": "ashley.rodriguez@example.com",
    "firstName": "Ashley",
    "lastName": "Rodriguez",
    "password": "veryStrongPass3456"
  },
    {
    "email": "matthew.martinez@example.com",
    "firstName": "Matthew",
    "lastName": "Martinez",
    "password": "extremelySecure7890"
  }
]
// --------------------------deepseek-----------------------------------------------------------------------
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [usersArray, setUsersArray] = useState([]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const passwordRef = useRef();
//   const eyeIconRef = useRef();

//   const fetchUsers = async () => {
//     let req = await fetch("http://localhost:3000/signup");
//     let users = await req.json();
//     setUsersArray(users);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();
//     let userFound = usersArray.find((user) => user.email === email);
//     if (userFound) {
//       if (userFound.password === password) {
//         alert("Login Success");
//       } else {
//         alert("Password Incorrect");
//       }
//     } else {
//       alert("User Not Found");
//     }
//   };

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//   };

//   const togglePasswordVisibility = () => {
//     if (eyeIconRef.current.src.includes("icons/eyeClose.svg")) {
//       eyeIconRef.current.src = "icons/eyeOpen.svg";
//       passwordRef.current.type = "text";
//     } else {
//       eyeIconRef.current.src = "icons/eyeClose.svg";
//       passwordRef.current.type = "password";
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800">
//             <span className="text-purple-900">Pass</span>OP
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Your Own Password Manager
//           </p>
//         </div>
//         <form onSubmit={handleLogin}>
//           <div className="mb-6">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={handleEmailChange}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 ref={passwordRef}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//                 required
//               />
//               <span
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//               >
//                 <img
//                   ref={eyeIconRef}
//                   src="icons/eyeClose.svg"
//                   alt="Toggle Password Visibility"
//                   className="h-5 w-5"
//                 />
//               </span>
//             </div>
//           </div>
//           <div className="flex items-center justify-between mb-6">
//             <button
//               onClick={handleForgotPassword}
//               className="text-sm text-purple-600 hover:text-purple-800"
//             >
//               Forgot Password?
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Not a member yet?{" "}
//             <button
//               onClick={handleSignup}
//               className="text-purple-600 hover:text-purple-800"
//             >
//               Signup
//             </button>
//           </p>
//         </div>
//         <div className="mt-6 text-center">
//           <label htmlFor="language" className="text-sm text-gray-600">
//             Language:{" "}
//           </label>
//           <select
//             id="language"
//             name="language"
//             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//           >
//             <option value="english">English</option>
//             <option value="hindi">Hindi</option>
//             <option value="marathi">Marathi</option>
//             <option value="german">German</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// --------------------------boltai-----------------------------------------------------------------------
// import React, { useState } from "react";
// // import { Eye, EyeOff, Lock, Mail } from "lucide-react";

// function App() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">
//             Welcome Back
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Please sign in to continue
//           </p>
//         </div>

//         {/* Login Card */}
//         <div className="bg-white rounded-lg shadow-xl p-8">
//           <form onSubmit={handleSubmit}>
//             {/* Email Field */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me and Forgot Password */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="remember-me"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-700"
//                 >
//                   Remember me
//                 </label>
//               </div>
//               <a
//                 href="#"
//                 className="text-sm text-blue-600 hover:text-blue-500"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Sign Up Link */}
//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Don't have an account?{" "}
//               <a
//                 href="#"
//                 className="font-medium text-blue-600 hover:text-blue-500"
//               >
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500">
//             © 2025 Your Company. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// --------------------------gemini-----------------------------------------------------------------------

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [usersArray, setusersArray] = useState([]);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const passwordRef = useRef();
//   const eyeIconRef = useRef();

//   const users = async () => {
//     let req = await fetch("http://localhost:3000/signup");
//     let users = await req.json();
//     setusersArray(users);
//   };

//   useEffect(() => {
//     users();
//   }, []);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const LoginFunction = (event) => {
//     event.preventDefault();
//     let userFound = usersArray.find((user) => user.email === email);
//     if (userFound) {
//       if (userFound.password === password) {
//         alert("Login Success");
//       } else {
//         alert("Password Incorrect");
//       }
//     } else {
//       alert("User Not Found");
//     }
//   };

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   const handleForgotPassword = () => {
//     // Implement forgot password logic here
//     console.log("Forgot password clicked");
//   };

//   const showPassword = () => {
//     if (eyeIconRef.current.src.includes("icons/eyeClose.svg")) {
//       eyeIconRef.current.src = "icons/eyeOpen.svg";
//       passwordRef.current.type = "text";
//     } else {
//       eyeIconRef.current.src = "icons/eyeClose.svg";
//       passwordRef.current.type = "password";
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-semibold text-gray-800">
//             Login
//           </h1>
//           <p className="text-sm text-gray-500">
//             Please enter your login details.
//           </p>
//         </div>
//         <form onSubmit={LoginFunction}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter Email"
//               onChange={handleEmailChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 autoComplete="current-password"
//                 className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter Password"
//                 onChange={handlePasswordChange}
//                 ref={passwordRef}
//                 required
//               />
//               <span
//                 onClick={showPassword}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
//               >
//                 <img
//                   ref={eyeIconRef}
//                   src="icons/eyeClose.svg"
//                   alt="icons/eyeClose.svg"
//                   className="h-5 w-5"
//                 />
//               </span>
//             </div>
//           </div>
//           <div className="flex justify-between items-center mb-4">
//             <button
//               type="button"
//               onClick={handleForgotPassword}
//               className="text-blue-500 hover:underline"
//             >
//               Forgot Password?
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <button
//               onClick={handleSignup}
//               className="text-blue-500 hover:underline"
//             >
//               Sign up
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// ------------------------------------------original code-------------------------------------
// import React, { useState, useEffect, useRef } from "react";
// import Button from "./Button";
// import ButtonWithImage from "./ButtonWithImage";
// import SimpleButtonWithText from "./SimpleButtonWithText";
// import SubmitButton from "./SubmitButton";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [usersArray, setusersArray] = useState([]);
//   const [email, setEmail] = useState(""); // State to store email
//   const [password, setPassword] = useState(""); // State to store password
//   const passwordRef = useRef();
//   const eyeIconRef = useRef();

//   const users = async () => {
//     let req = await fetch("http://localhost:3000/signup");
//     let users = await req.json();
//     setusersArray(users);
//   };

//   useEffect(() => {
//     users();
//   }, []);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value); // Update email state on input change
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value); // Update password state on input change
//   };

//   const LoginFunction = (event) => {
//     event.preventDefault();
//     console.log("login clicked users = ", usersArray);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     let userFound = usersArray.find((user) => user.email === email);
//     console.log(userFound);
//     if (userFound) {
//       if (userFound.password === password) {
//         alert("Login Success");
//       } else {
//         alert("Password Incorrect");
//       }
//     } else {
//       alert("User Not Found");
//     }
//   };

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//   };
//   const showPassword = () => {
//     if (eyeIconRef.current.src.includes("icons/eyeClose.svg")) {
//       eyeIconRef.current.src = "icons/eyeOpen.svg";
//       passwordRef.current.type = "text";
//     } else {
//       eyeIconRef.current.src = "icons/eyeClose.svg";
//       passwordRef.current.type = "password";
//     }
//   };

//   return (
//     // <div>
//     //   {/* Background */}
//     //   {/* <div className="fixed left-0 top-0 -z-10 h-full w-full">
//     //             <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
//     //         </div> */}
//     //   <div className=" w-full flex justify-center items-center h-screen bg-gradient-to-br from-purple-100 to-purple-300">
//     //     <div className="md:w-3/10 bg-white rounded-md shadow-lg max-sm:h-9/10">
//     //       <div className="p-10">
//     //         <h1 className="text-4xl font-bold text-center">
//     //           <span>&lt;</span>
//     //           <span>Pass</span>
//     //           <span className="text-purple-900">OP/</span>
//     //           <span>&gt;</span>
//     //           <p className="font-normal text-base">
//     //             Your Own Password Manager
//     //           </p>
//     //         </h1>
//     //       </div>
//     //       <div className="p-4 border-1">
//     //         <form action="" onSubmit={LoginFunction}>
//     //           <fieldset>
//     //             <legend className="text-4xl font-bold pb-4">
//     //               Secure Login
//     //             </legend>
//     //             <div className="p-1 border-1">
//     //               <label htmlFor="email" className="pr-1 border-1">
//     //                 Email Address
//     //               </label>
//     //               <input
//     //                 type="email"
//     //                 name="email"
//     //                 id="email"
//     //                 className="border-1 border-purple-500 rounded-sm  pl-1"
//     //                 placeholder="Enter Email"
//     //                 onChange={handleEmailChange}
//     //                 required
//     //               />
//     //             </div>
//     //             <div className="md:flex justify-between items-center p-1">
//     //               <div className="relative">
//     //                 <label htmlFor="password" className="pr-1 ">
//     //                   Password
//     //                 </label>
//     //                 <input
//     //                   type="password"
//     //                   name="password"
//     //                   id="password"
//     //                   autocomplete="current-password"
//     //                   className="border-1 border-purple-500 rounded-sm pl-1"
//     //                   placeholder="Enter Password"
//     //                   onChange={handlePasswordChange}
//     //                   ref={passwordRef}
//     //                   required
//     //                 />
//     //                 <span
//     //                   onClick={showPassword}
//     //                   className="pl-1 pr-1 absolute right-0 bottom-0 hover:cursor-pointer"
//     //                 >
//     //                   <img
//     //                     ref={eyeIconRef}
//     //                     src="icons/eyeClose.svg"
//     //                     alt="icons/eyeClose.svg"
//     //                   />
//     //                 </span>
//     //               </div>
//     //               <div className="text-center">
//     //                 <button
//     //                   className="text-purple-500 hover:cursor-pointer"
//     //                   onClick={handleForgotPassword}
//     //                 >
//     //                   Forgot?
//     //                 </button>
//     //               </div>
//     //             </div>
//     //             <div className="p-2 flex justify-center">
//     //               <SubmitButton text={"Login"} />
//     //             </div>
//     //           </fieldset>
//     //         </form>
//     //       </div>
//     //       {/* <div className='text-center pb-2'>or</div> */}
//     //       {/* <div className='flex justify-center items-center p-2'>
//     //                     <ButtonWithImage text={"Sign in with Google"} imgSrc={"icons/google.svg"} />
//     //                 </div> */}
//     //       <div className="flex justify-center gap-2 p-2">
//     //         Not a member yet?{" "}
//     //         <button
//     //           onClick={handleSignup}
//     //           className="text-purple-500 hover:cursor-pointer"
//     //         >
//     //           Signup
//     //         </button>
//     //       </div>
//     //       <div className="pb-4 flex justify-center items-center">
//     //         <label for="fruits" className="p-2">
//     //           Language:{" "}
//     //         </label>
//     //         <select name="fruits" id="fruits">
//     //           <option value="apple">English</option>
//     //           <option value="banana">Hindi</option>
//     //           <option value="orange">Marathi</option>
//     //           <option value="grape">German</option>
//     //         </select>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     // -------------------------------------------------chatgpt-------------------------------------------------
//     <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1]">
//       <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-center text-3xl font-semibold text-gray-800">
//           Welcome Back
//         </h2>
//         <p className="text-center text-gray-500">
//           Sign in to continue
//         </p>

//         <form onSubmit={LoginFunction} className="mt-6">
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium">
//               Email Address
//             </label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//               placeholder="Enter your email"
//               onChange={handleEmailChange}
//               required
//             />
//           </div>

//           <div className="mb-4 relative">
//             <label className="block text-gray-700 font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               ref={passwordRef}
//               className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//               placeholder="Enter your password"
//               onChange={handlePasswordChange}
//               required
//             />
//             <span
//               onClick={showPassword}
//               className="absolute right-4 top-9 cursor-pointer"
//             >
//               <img
//                 ref={eyeIconRef}
//                 src="icons/eyeClose.svg"
//                 alt="Toggle Password"
//               />
//             </span>
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <button
//               onClick={handleForgotPassword}
//               className="text-sm text-purple-500 hover:underline"
//             >
//               Forgot Password?
//             </button>
//           </div>

//           <SubmitButton
//             text={"Login"}
//             className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//           />
//         </form>

//         <div className="mt-4 text-center text-gray-600">
//           Not a member?{" "}
//           <button
//             onClick={handleSignup}
//             className="text-purple-600 font-semibold hover:underline"
//           >
//             Signup
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// --------------------------Meta ai-----------------------------------------------------------------------
// import React, { useState, useEffect, useRef } from "react";
// import Button from "./Button";
// import ButtonWithImage from "./ButtonWithImage";
// import SimpleButtonWithText from "./SimpleButtonWithText";
// import SubmitButton from "./SubmitButton";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [usersArray, setusersArray] = useState([]);

//   const [email, setEmail] = useState(""); // State to store email

//   const [password, setPassword] = useState(""); // State to store password

//   const passwordRef = useRef();

//   const eyeIconRef = useRef();

//   const users = async () => {
//     let req = await fetch("http://localhost:3000/signup");
//     let users = await req.json();
//     setusersArray(users);
//   };

//   useEffect(() => {
//     users();
//   }, []);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value); // Update email state on input change
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value); // Update password state on input change
//   };

//   const LoginFunction = (event) => {
//     event.preventDefault();

//     console.log("login clicked users = ", usersArray);

//     console.log("Email:", email);

//     console.log("Password:", password);

//     let userFound = usersArray.find((user) => user.email === email);

//     console.log(userFound);

//     if (userFound) {
//       if (userFound.password === password) {
//         alert("Login Success");
//       } else {
//         alert("Password Incorrect");
//       }
//     } else {
//       alert("User Not Found");
//     }
//   };

//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//   };

//   const showPassword = () => {
//     if (eyeIconRef.current.src.includes("icons/eyeClose.svg")) {
//       eyeIconRef.current.src = "icons/eyeOpen.svg";
//       passwordRef.current.type = "text";
//     } else {
//       eyeIconRef.current.src = "icons/eyeClose.svg";
//       passwordRef.current.type = "password";
//     }
//   };

//   return (
//     <div
//       className="h-screen bg-no-repeat bg-cover bg-center relative overflow-hidden"
//       style={{
//         backgroundImage:
//           'url("https://client.webhostmost.com/assets/images/login-bg.jpg")',
//       }}
//     >
//       <div className="container mx-auto h-full flex justify-center items-center">
//         <div className="w-1/2 xl:w-1/3 bg-white rounded-lg shadow-lg p-10">
//           <h2 className="text-2xl font-bold text-center mb-4">
//             Secure Login
//           </h2>
//           <form onSubmit={LoginFunction}>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Email Address:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter Email"
//                 onChange={handleEmailChange}
//                 required
//               />
//             </div>
//             <div className="mb-4 relative">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter Password"
//                 onChange={handlePasswordChange}
//                 ref={passwordRef}
//                 required
//               />
//               <span
//                 onClick={showPassword}
//                 className="absolute right-0 bottom-0 mr-2 mb-1 hover:cursor-pointer"
//               >
//                 <img
//                   ref={eyeIconRef}
//                   src="icons/eyeClose.svg"
//                   alt="icons/eyeClose.svg"
//                 />
//               </span>
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Login
//               </button>
//               <a
//                 href="#"
//                 className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
//                 onClick={handleForgotPassword}
//               >
//                 Forgot Password?
//               </a>
//             </div>
//           </form>
//           <div className="text-center mt-4">
//             Not a member yet?{" "}
//             <button
//               onClick={handleSignup}
//               className="text-purple-500 hover:text-purple-800 font-bold"
//             >
//               Signup
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

