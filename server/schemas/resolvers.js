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
		userLeafs: async (parent, { username }) => {
			return await User.find({ username }).populate("leafs")
		},
		leaf: async (parent, { _id }) => {
			return await Leaf.findById(_id).populate("owner")
		},
	},
}

module.exports = resolvers
