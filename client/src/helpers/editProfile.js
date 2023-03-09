import React, { useState, useEffect } from "react";
import Input from "./Input";
import axios from "axios";
import "./styles.css";

const INITIAL_STATE = {
  id: 0,
  name: "",
  email: ""
};
export default function App() {
  const [user, setUser] = useState(INITIAL_STATE);
  useEffect(() => {
    (async () => {
      try {
        const user = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setUser(user.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      const response = await axios.put(`https://yourendpoint/${user.id}`, user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          value={user.name}
          placeholder={"Your names"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="email"
          type="email"
          value={user.email}
          placeholder={"Your email"}
          handleInput={handleInput}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
