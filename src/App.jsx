import './App.css'
import Manager from './Components/Manager'
// import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';



function App({ user }) {
  // const history = useHistory();

  // useEffect(() => {
  //   // Check if a specific query param exists, otherwise set a default.
  //   const params = new URLSearchParams(window.location.search);
  //   if (!params.has('user')) {
  //     params.set('user', 'undefined'); // Setting default value
  //     history.replace({ search: params.toString() });
  //   }
  // }, [history]);


  return (
    <div className=''>
       {user ? (
        <p>Logged in as: {user}</p>
      ) : (
        <p>Not logged in. Dummy Passwords</p>
      )}
      <Manager />
    </div>
  )
}

export default App
