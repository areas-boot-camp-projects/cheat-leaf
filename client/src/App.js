import React from "react";
import Navbar from './nav/Navbar';
import Footer from './nav/Footer';
import Main from './Main';
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
      <Main />
      <Footer />
    </ApolloProvider>
  )
}

export default App
