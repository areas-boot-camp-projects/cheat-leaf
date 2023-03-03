import React from "react"
import Home from "./pages/Home"
import About from './pages/About'
import Login from "./pages/Login"
import Navbar from './nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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

function App() {
  return (
    <ApolloProvider client={client}> 
      <Navbar />

      
    </ApolloProvider>
  )
}

export default App
