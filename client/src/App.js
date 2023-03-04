import React from "react"
import Home from "./pages/Home"
import About from './pages/About'
import Login from "./pages/Login"
import Navbar from './nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route } from 'react-router-dom'

import axios from 'axios';
import Routers from './routes'
import { setAuthToken } from "./helpers/setAuthToken"

// Import the Apollo client.
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"

// Child components.
import Users from "./components/Users"

// Create the Apollo client.
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
})

const token = localStorage.getItem("token");
if (token) {
    setAuthToken(token);
}

return (
  <div className="App">
    <Routers/>
  </div>
);

function App() {
  return (
    <ApolloProvider client={client}> 
      <Navbar />
      <Route path="/" exact component={Home} />


      
    </ApolloProvider>
  )
}  

export default App;
