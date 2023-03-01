import React, { useState, useEffect } from "react";
import Navbar from "./nav/Navbar.js";
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login"

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    
    <div>


        <Home />
        <About />
        <Login />

      <Nav/>


        <Navbar />


    {(typeof backendData.users === 'undefined') ? (
      <p>Loading...</p>
    ): (
      backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
    )
    }

    </div>
  )
}

export default App