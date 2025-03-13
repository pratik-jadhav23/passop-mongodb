import React, { useState, useRef, useEffect } from "react";

const Signup = () => {
  const eyeIconRef = useRef();
  const passwordRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [usersArray, setusersArray] = useState([]);

  const users = async () => {
    let req = await fetch("http://localhost:3000/signup");
    let users = await req.json();
    setusersArray(users);
  };

  useEffect(() => {
    users();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("normal clog = ",formData);
    console.log("usersArray = ", usersArray);
    
    // setusersArray([...passwordsArray, { ...formData }])
    // let res = await fetch("http://localhost:3000/", {
    //   method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, id: uuidv4() })
    // })
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
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-purple-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              autocomplete="given-name"
              className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-purple-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              autocomplete="family-name"
              className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-purple-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autocomplete="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-purple-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autocomplete="new-password"
              className="mt-1 p-2 w-full border rounded-md focus:ring-purple-500 focus:border-purple-500"
              ref={passwordRef}
            />
            <span
              onClick={showPassword}
              className="pl-1 pr-1 absolute right-0 bottom-2 hover:cursor-pointer"
            >
              <img
                ref={eyeIconRef}
                src="icons/eyeClose.svg"
                alt="icons/eyeClose.svg"
              />
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
