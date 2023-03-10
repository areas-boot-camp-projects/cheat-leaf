// Dependencies.
const { gql } = require("apollo-server-express")

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
		password: String!
		createdAtFormatted: String!
		updatedAtFormatted: String!
		leafs: [Leaf]!
		leafCount: Int
	}

	type Leaf {
		_id: ID!
		owner: User!
		ownerUsername: String!
		title: String!
		content: String!
		createdAtFormatted: String!
		updatedAtFormatted: String!
	}

	type Auth {
		user: User
		token: ID!
	}

	type Query {
		users: [User]
		
		user(
			username: String!
		): User
		
		userLeafs(
			username: String!
		): [Leaf]
		
		leafs: [Leaf]
		
		leaf(
			leafId: ID!
		): Leaf

		searchLeafs(
			searchTerm: String!
		): [Leaf]
	}

	type Mutation {
		signUpUser(
			username: String!,
			email: String!,
			password: String!,
		): Auth

		signInUser(
			username: String,
			email: String,
			password: String!,
		): Auth

		editUser(
			userId: ID!,
			username: String,
			email: String,
			password: String,
		): User

		deleteUser(
			userId: ID,
			username: String,
			email: String,
		): User

		addLeaf(
			ownerUsername: String!,
			title: String!,
			content: String!,
		): Leaf
		
		editLeaf(
			leafId: ID!,
			title: String!,
			content: String!
		): Leaf
		
		deleteLeaf(
			leafId: ID!
		): Leaf
	}
`

module.exports = typeDefs
