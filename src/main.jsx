import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import About from './Components/About.jsx'
import Signup from './Components/Signup.jsx';

function AppWithDefaultUser() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = searchParams.get('user'); // Get the 'user' parameter

  useEffect(() => {
    if (!searchParams.has('user')) {
      // setSearchParams({ user: undefined });
    }
  }, [searchParams, setSearchParams]);

  return <App user={user}/>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      {/* <App /> */}
      <AppWithDefaultUser />
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
  {
    path: "/signup",
    element: <>
      <Navbar />
      <Signup />
    </>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
