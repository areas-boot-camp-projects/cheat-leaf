import React from "react";
import Navbar from './nav/Navbar';
import Footer from './nav/Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Apollo dependencies.
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

// Create the httpLink.
const httpLink = createHttpLink({
  uri: "/graphql",
})

// Create the auth link.
const authLink = setContext((_, { headers }) => {
  // If there’s a token in local storage, add it to the request headers.
  const token = localStorage.getItem("token")
  // Return the headers to the context so httpLink can read them.
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

// Create the Apollo client.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

// App.
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
