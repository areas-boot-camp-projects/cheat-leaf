// Models.
const { User, Leaf } = require("../models")
const { findOne } = require("../models/User")

// Middleware.
// ** todo: add validation / error handling (as middleware). **

// Resolvers.
// ** todo: add try/catch blocks to better catch errors. **
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
			return await Leaf.findById(leafId).populate("ownerId")
		},
	},

	Mutation: {
		signUpUser: async (parent, { username, email, password }) => {
			// Create the user.
			const addedUser = await User.create({
				username,
				email,
				password,
			})
			return addedUser
		},
		signInUser: async (parent, { username, email, password }) => {
			let user
			// If there’s a username, use it to find the user.
			if (username) {
				user = await User.findOne({ username })
			}
			// If there’s an email, use it to find the user.
			if (email) {
				user = await User.findOne({ email })
			}
			// If there’s a user, validate the password.
			const validatedPassword = await user.validatePassword(password)
			return validatedPassword ? user : null
		},
		addLeaf: async (parent, { ownerUsername, title, content }) => {
			// Get the owner by their username.
			const user = await User.findOne({ username: ownerUsername })
			// Create the leaf.
			const addedLeaf = await Leaf.create({
				ownerId: user._id,
				ownerUsername,
				title,
				content,
			})
			// Add the leaf to the user's leafs array.
			await User.findOneAndUpdate(
				{ _id: user._id },
				{ $addToSet: { leafs: addedLeaf._id } },
			)
			return addedLeaf
		},
		editLeaf: async (parent, { leafId, title, content }) => {
			// Edit the leaf.
			const editedLeaf = await Leaf.findOneAndUpdate(
				{ _id: leafId },
				{ title, content },
				{ new: true },
			)
			return editedLeaf
		},
		deleteLeaf: async (parent, { leafId }) => {
			// Delete the leaf.
			const deletedLeaf = await Leaf.findOneAndDelete({ _id: leafId })
			// Delete the leaf from the user's leafs array.
			await User.findOneAndUpdate(
				{ _id: deletedLeaf.ownerId },
				{ $pull: { leafs: leafId } },
			)
			return deletedLeaf
		},
	},
}

module.exports = resolvers
