// React.
import React, { useState, useEffect } from "react"

// Import the Apollo client.
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"

// Create the Apollo client.
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
})

function App() {

  // Fetch from the test route.
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <ApolloProvider client={client}>
      <div>
        {(typeof backendData.users === "undefined")
          ? (
            <p>Loading...</p>
          )
          : (
            backendData.users.map((user, i) => (
              <p key={i}>{user}</p>
            ))
          )
        }
      </div>
    </ApolloProvider>
  )
}

export default App
