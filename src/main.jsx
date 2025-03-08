import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import About from './Components/About.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <App />
    </>,
  },
  {
    path: "/login",
    element: <>
      <Navbar />
      <Login />
    </>
  },
  {
    path: "/about",
    element: <>
      <Navbar />
      <About />
    </>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
