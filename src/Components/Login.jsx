// --------------------------claude ai-----------------------------------------------------------------------
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [usersArray, setUsersArray] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const eyeIconRef = useRef();

  const users = async () => {
    let req = await fetch("http://localhost:3000/signup");
    let users = await req.json();
    setUsersArray(users);
  };

  useEffect(() => {
    users();
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const LoginFunction = (event) => {
    event.preventDefault();
    console.log("login clicked users = ", usersArray);
    console.log("Email:", email);
    console.log("Password:", password);
    let userFound = usersArray.find((user) => user.email === email);
    console.log(userFound);
    if (userFound) {
      if (userFound.password === password) {
        alert("Login Success");
      } else {
        alert("Password Incorrect");
      }
    } else {
      alert("User Not Found");
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
  };

  const showPassword = () => {
    if (eyeIconRef.current.src.includes("icons/eyeClose.svg")) {
      eyeIconRef.current.src = "icons/eyeOpen.svg";
      passwordRef.current.type = "text";
    } else {
      eyeIconRef.current.src = "icons/eyeClose.svg";
      passwordRef.current.type = "password";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span>&lt;</span>
            <span>Pass</span>
            <span className="text-purple-900">OP/</span>
            <span>&gt;</span>
          </h1>
          <p className="text-gray-600 mt-1">
            Your Own Password Manager
          </p>
        </div>

        {/* Login Form */}
        <div>
          <form onSubmit={LoginFunction}>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Secure Login
            </h2>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                onChange={handleEmailChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <button
                  className="text-sm text-purple-600 hover:text-purple-800 cursor-pointer"
                  onClick={handleForgotPassword} 
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                  onChange={handlePasswordChange}
                  ref={passwordRef}
                  required
                />
                <span
                  onClick={showPassword}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                >
                  <img
                    ref={eyeIconRef}
                    src="icons/eyeClose.svg"
                    alt="Toggle password visibility"
                    className="h-5 w-5"
                  />
                </span>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Not a member yet?{" "}
            <button
              onClick={handleSignup}
              className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </div>

        {/* Language Selector */}
        <div className="mt-6 flex justify-center items-center">
          <label
            htmlFor="language"
            className="text-sm text-gray-600 mr-2"
          >
            Language:
          </label>
          <select
            name="language"
            id="language"
            className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
            <option value="german">German</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Login;