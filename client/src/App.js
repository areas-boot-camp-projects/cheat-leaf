import React from "react"
import Navbar from './nav/Navbar';
import Main from './Main';
import Footer from './nav/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route } from 'react-router-dom'
import Routers from './routes'
import {setAuthToken} from './helpers/setAuthToken';

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
      <Main />
      <Footer />
    </ApolloProvider>
  )
}

  const token = localStorage.getItem("token");
if (token) {
    setAuthToken(token);
}

export default App;
