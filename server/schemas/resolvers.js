// Models.
const { User, Leaf } = require("../models")

// Resolvers.
// ** todo: add validation / error handling (as middleware). **
const resolvers = {
	Query: {
		users: async () => {
			// Get all users and populate their leaves.
			return await User.find().populate("leafs")
		},
		user: async (parent, { username }) => {
			// Get a user by their username and populate their leaves.
			return await User.findOne({ username }).populate("leafs")
		},
		userLeafs: async (parent, { username }) => {
			// Get a user’s leaves by owner username.
			return await Leaf.find({ ownerUsername: username }).populate("ownerId")
		},
		leafs: async () => {
			// Get all leaves.
			return await Leaf.find().populate("ownerId")
		},
		leaf: async (parent, { leafId }) => {
			// Get a leaf by its ID.
			return await Leaf.findById( leafId ).populate("ownerId")
		},
	},

	Mutation: {
		addLeaf: async (parent, { ownerId, ownerUsername, title, content }) => {
			// Create a leaf.
			const leaf = await Leaf.create({
				ownerId,
				ownerUsername,
				title,
				content,
			})
			// Add the leaf to the user's leafs array.
			await User.findOneAndUpdate(
				{ _id: ownerId },
				{ $addToSet: { leafs: leaf._id } },
			)
			return leaf
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
