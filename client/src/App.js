// React.
import React from "react"

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
      {/* This is just here to test the connection between the front and back end. */}
      <Users />
    </ApolloProvider>
  )
}

export default App
