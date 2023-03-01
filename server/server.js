// Dependencies.
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// Database and schema.
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

// Server.
const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Middleware.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Test route.
app.get("/", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});

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
