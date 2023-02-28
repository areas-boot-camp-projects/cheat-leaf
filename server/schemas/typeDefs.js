// Dependencies.
const { gql } = require("apollo-server-express")

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
		leafs: [Leaf]!
		leafCount: Int
	}

	type Leaf {
		_id: ID!
		owner: User!
		title: String!
		content: String!
	}

	type Query {
		users: [User]
		user(username: String!): User
		userLeafs(username: String!): [Leaf]
		leaf(_id: ID!): Leaf
	}
`

module.exports = typeDefs
