import js from "@eslint/js";
import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import DisplayData from "./DisplayData";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "./Manager.css";
import { counterContext } from "../context/context";


const Manager = () => {
  const eyeIconRef = useRef();
  const siteRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const saveButtonRef = useRef();
  const editButtonRef = useRef();
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordsArray, setpasswordsArray] = useState([]);
  const { user, setUser } = useContext(counterContext);

  const getPasswords = async () => {
    let req = await fetch(`http://localhost:3000/?user=${user}`);
    let passwords = await req.json();
    setpasswordsArray(passwords);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const showPassword = () => {
    if (eyeIconRef.current.src.includes("icons/eyeClose.svg")) {
      eyeIconRef.current.src = "icons/eyeOpen.svg";
      passwordRef.current.type = "text";
    } else {
      eyeIconRef.current.src = "icons/eyeClose.svg";
      passwordRef.current.type = "password";
    }
  };
  const savePassword = async () => {
    if (
      form.site.length >= 3 &&
      form.username.length >= 3 &&
      form.password.length >= 3
    ) {
      if (
        saveButtonRef.current.innerHTML.includes("Save this edit")
      ) {
        let res = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, button: "edit",user }),
        });
        getPasswords();

        saveButtonRef.current.innerHTML = `<lord-icon
                                        src="https://cdn.lordicon.com/sbnjyzil.json"
                                        trigger="hover"
                                        stroke="bold"
                                        colors="primary:#ffffff,secondary:#ffffff"
                                        >
                                        </lord-icon>
                                        Add Password`;
      } else {
        setpasswordsArray([
          ...passwordsArray,
          { id: uuidv4(), ...form },
        ]);
        let res = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, id: uuidv4(),user }),
        });
      }
      if (eyeIconRef.current.src.includes("icons/eyeOpen.svg"))
        eyeIconRef.current.src = "icons/eyeClose.svg";
      toast("New Password Saved", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setForm({ site: "", username: "", password: "" });
    } else {
      toast("Fill input fields!!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const clearPasswordsArray = async(e) => {
  // console.log('pa', passwordsArray);
  // let res = await fetch("http://localhost:3000/", {
  //     method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({id:"many"})
  // })

  // setpasswordsArray([...passwordsArray.slice(0, passwordsArray.length - 3)]) // Just to re-render the UI

  // localStorage.setItem("passwords", JSON.stringify([...passwordsArray.slice(0, passwordsArray.length - 3)]))
  // console.log('pa', passwordsArray);
  //     if (eyeIconRef.current.src.includes("icons/eyeOpen.svg")) eyeIconRef.current.src = "icons/eyeClose.svg"

  //     toast('Last 3 Passwords Deleted', {
  //         position: "top-right",
  //         autoClose: 4000,
  //         hideProgressBar: false,
  //         closeOnClick: false,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //     });
  // }

  const handleCopy = (text) => {
    toast("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const handleEdit = async (item) => {
    setForm({
      site: item.site,
      username: item.username,
      password: item.password,
      id: item.id,
    });
    saveButtonRef.current.innerHTML = `<img src="icons/save.svg" alt="save.svg" /> Save this edit`;
  };

  const handleDelete = async (item) => {
    let c = confirm("Are you sure you want to delete this password?");
    if (c) {
      let res = await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id }),
      });

      setpasswordsArray(
        passwordsArray.filter((paitem) => paitem.id !== item.id)
      );

      toast("Password Deleted!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleDummyPassword = (e) => {
    saveButtonRef.current.innerHTML = `<lord-icon
                                        src="https://cdn.lordicon.com/sbnjyzil.json"
                                        trigger="hover"
                                        stroke="bold"
                                         colors="primary:#ffffff,secondary:#ffffff"
                                        >
                                        </lord-icon>
                                        Add Password`;

    let random = Math.floor(Math.random() * 111);
    setForm({
      site: `Dummy${random}`,
      username: `Dummyy${random}`,
      password: `Dummyyyyy${random}`,
    });
    if (eyeIconRef.current.src.includes("icons/eyeOpen.svg"))
      eyeIconRef.current.src = "icons/eyeClose.svg";
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 bg-white">
      <div className="border-1 border-purple-500 rounded-md container md:w-3/5">
        <div className="">
          <h1 className="text-2xl font-semibold text-center">
            <span>&lt;</span>
            <span>Pass</span>
            <span className="text-purple-900">OP/</span>
            <span>&gt;</span>
            <p className="font-normal text-base">
              Your Own Password Manager
            </p>
          </h1>
          {/* -----------website input------------------- */}
          <div className="text-center p-1">
            <input
              type="text"
              value={form.site}
              onChange={handleChange}
              name="site"
              placeholder="Enter Website URL"
              className="border-1 border-purple-500 rounded-sm w-full"
              ref={siteRef}
            />
          </div>
          <div className="md:flex justify-between">
            {/* ------------username input-------------- */}
            <div className="md:w-2/5 p-1">
              <input
                type="email"
                value={form.username}
                onChange={handleChange}
                name="username"
                placeholder="Enter Username"
                className="border-1 border-purple-500 rounded-sm w-full "
                ref={usernameRef}
                required
              />
            </div>

            <div className="md:flex md:items-center relative md:w-2/5 p-1">
              {/* ------------password input--------------- */}
              <input
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter Password"
                className="border-1 border-purple-500 rounded-sm w-full"
                ref={passwordRef}
                required
              />
              <span
                onClick={showPassword}
                className="pl-1 pr-1 absolute right-0 hover:cursor-pointer"
              >
                <img
                  ref={eyeIconRef}
                  src="icons/eyeClose.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="md:flex justify-center items-center p-1">
            {/* ---------------------savePasswords button----------------- */}
            <div className="max-md:flex justify-center ">
              <button
                onClick={savePassword}
                className="my-button flex justify-center items-center m-1 p-1 rounded-md border-1 border-purple-500 hover:cursor-pointer bg-purple-500 text-white"
                ref={saveButtonRef}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/sbnjyzil.json"
                  trigger="hover"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#ffffff"
                ></lord-icon>
                Add Password
              </button>
            </div>
            {/* ------------------Clear last 3 passwords Button-------------- */}
            {/* <button onClick={clearPasswordsArray} className='flex justify-center items-center m-1 p-2 rounded-md border-1 border-purple-500 hover:cursor-pointer'>
                            Clear last 3 passwords
                        </button> */}
            {/* Add dummy password Button  */}
            <button
              onClick={handleDummyPassword}
              className="flex justify-center items-center m-1 p-2 rounded-md border-1 border-purple-500 hover:cursor-pointer bg-purple-500 text-white"
            >
              +Add one Dummy Password
            </button>
          </div>
        </div>
      </div>
      {/* ------------------DisplaData Div---------------------------- */}
      <div className="pt-2">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="p-1">
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="w-11/12 mx-auto border-purple-500" />
          <hr className="w-11/12 mx-auto  border-purple-500" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
          <hr className="opacity-0" />
        </div>

        <div className="flex justify-center p-1  overflow-x-auto">
          {passwordsArray.length === 0 ? (
            <div>No Data to Show!</div>
          ) : (
            <table className="table-fixed w-full border-1">
              <thead>
                <tr>
                  <th className="border-1 md:w-[40%]">Website</th>
                  <th className="border-1">Email</th>
                  <th className="border-1">Password</th>
                  <th className="border-1 md:w-[10%]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordsArray.map((item, index) => (
                  <tr key={index}>
                    <td className="border-1">
                      <div className="flex items-center justify-between">
                        <span className="w-11/12 overflow-x-auto">
                          <a
                            href={item.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                          >
                            {item.site}
                          </a>
                        </span>
                        <div
                          className="hover:cursor-pointer"
                          onClick={() => {
                            handleCopy(item.site);
                          }}
                        >
                          <img src="icons/copy.svg" alt="copy.svg" />
                        </div>
                      </div>
                    </td>
                    <td className="border-1">
                      <div className="flex items-center justify-between">
                        <div className="w-[85%] max-sm:overflow-x-scroll">
                          {item.username}
                        </div>
                        <div
                          className="hover:cursor-pointer"
                          onClick={() => {
                            handleCopy(item.username);
                          }}
                        >
                          <img src="icons/copy.svg" alt="copy.svg" />
                        </div>
                      </div>
                    </td>
                    <td className="border-1">
                      <div className="flex items-center justify-between">
                        <div className="w-[85%] max-sm:overflow-x-scroll">
                          {/* {"*".repeat(item.password.length)} */}
                        </div>
                        <div
                          className="hover:cursor-pointer"
                          onClick={() => {
                            handleCopy(item.password);
                          }}
                        >
                          <img src="icons/copy.svg" alt="copy.svg" />
                        </div>
                      </div>
                    </td>
                    <td className="border-1">
                      <div className="flex justify-around">
                        <div
                          className="hover:cursor-pointer"
                          ref={editButtonRef}
                          onClick={() => {
                            handleEdit(item);
                          }}
                        >
                          <img src="icons/edit.svg" alt="edit.svg" />
                        </div>
                        <div
                          className="hover:cursor-pointer"
                          onClick={() => {
                            handleDelete(item);
                          }}
                        >
                          <img
                            src="icons/delete.svg"
                            alt="delete.svg"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
