import { StrictMode, useEffect, useState, useContext } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { counterContext } from "./context/context"; // Assuming your context is in context/context.js
// import { counterContext } from "./context/context.js";

import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import About from "./Components/About.jsx";
import Signup from "./Components/Signup.jsx";

function AppWithDefaultUser() {
  const { user, setUser } = useContext(counterContext); // ✅ Correctly using useContext
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   console.log("rendered");
  //   const urlUser = searchParams.get("user");
  //   if (user && user !== urlUser) {
  //     setSearchParams({ user });
  //   }
  // }, [user]); // ✅ Removes setSearchParams from dependencies to avoid unnecessary re-renders

  useEffect(() => {
    // Update the URL if user state changes
    console.log('rendered');
    if (user !== searchParams.get("user")) {
      setSearchParams({ user });
    }
  }, [user, setSearchParams]);

  return <App user={user} />;
}

function AppWrapper() {
  const [user, setUser] = useState(null); // Shared state

  return (
    <counterContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </counterContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <AppWithDefaultUser />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login /> {/* Pass setUser to Login component */}
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <AppWrapper />
  </StrictMode>
);

// import { StrictMode, useEffect, useState } from 'react'
// import { createRoot } from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useSearchParams,
//   useNavigate,
// } from "react-router-dom";
// import { counterContext } from './context/context'

// import './index.css'
// import App from './App.jsx'
// import Navbar from './Components/Navbar'
// import Login from './Components/Login'
// import About from './Components/About.jsx'
// import Signup from './Components/Signup.jsx';

// function AppWithDefaultUser() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [user, setUser] = useState(searchParams.get('user'))
//   const navigate = useNavigate();
//   // const user = searchParams.get('user'); // Get the 'user' parameter

//   useEffect(() => {
//     if (!searchParams.has('user')) {
//       // setSearchParams({ user: undefined });
//     }
//   }, [searchParams, setSearchParams]);

//   return <App user={user}/>;
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <>
//       <Navbar />
//       {/* <App /> */}
//       <AppWithDefaultUser />
//     </>,
//   },
//   {
//     path: "/login",
//     element: <>
//       <Navbar />
//       <Login />
//     </>
//   },
//   {
//     path: "/about",
//     element: <>
//       <Navbar />
//       <About />
//     </>
//   },
//   {
//     path: "/signup",
//     element: <>
//       <Navbar />
//       <Signup />
//     </>
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )
