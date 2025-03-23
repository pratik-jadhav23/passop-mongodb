import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { counterContext } from "../context/context";
import { ToastContainer, toast } from "react-toastify";

const Logout = () => {
  const { setUser } = useContext(counterContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null); // Clear user session
    setTimeout(() => navigate("/"), 1000); // Redirect to homepage
  }, [setUser, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-700">
        Logging out...
      </h1>
    </div>
  );
};

export default Logout;
