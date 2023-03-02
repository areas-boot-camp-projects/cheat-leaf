// Models.
const { User, Leaf } = require("../models")

// Resolvers.
const resolvers = {
	Query: {
		users: async () => {
			return await User.find()
		},
		user: async (parent, { username }) => {
			return await User.findOne({ username })
		},
		userLeafs: async (parent, { ownerUsername }) => {
			return await Leaf.find({ ownerUsername })
		},
		leafs: async () => {
			return await Leaf.find()
		},
		leaf: async (parent, { _id }) => {
			return await Leaf.findById(_id).populate("owner")
		},
	},

	Mutation: {
		addLeaf: async (parent, { ownerId, ownerUsername, title, content }) => {
			return "So far, so good!"
		},
		editLeaf: async (parent, { leafId, title, content }) => {
			return "So far, so good!"
		},
		deleteLeaf: async (parent, { leafId }) => {
			return "So far, so good!"
		},
	},
}

module.exports = resolvers
