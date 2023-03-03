// Dependencies.
const { gql } = require("apollo-server-express")

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
		createdAtFormatted: String!
		updatedAtFormatted: String!
		leafs: [Leaf]!
		leafCount: Int
	}

	type Leaf {
		_id: ID!
		ownerId: User!
		ownerUsername: String!
		title: String!
		content: String!
		createdAtFormatted: String!
		updatedAtFormatted: String!
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
	}

	type Mutation {
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
