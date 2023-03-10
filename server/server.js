// Dependencies.
const path = require("path")
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const { verifyToken } = require("./utils/auth")

// Database and schema.
const db = require("./config/connection")
const { typeDefs, resolvers } = require("./schemas")

// Server.
const app = express()
const PORT = process.env.PORT || 3001
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: verifyToken,
})

// Middleware.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "../client/build")))

console.log(path.resolve(__dirname, "../client/build"))

// Set up the server.
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start()
    server.applyMiddleware({ app })
    // Connect to the database and console log the details.
    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}! 🚀`)
            console.log(`GraphQL at http://localhost:${PORT}${server.graphqlPath} 🤓`)
        })
    })
}
  
// Start the server.
startApolloServer(typeDefs, resolvers)
