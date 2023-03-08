// Dependencies.
const { signToken } = require("../utils/auth")
const { AuthenticationError } = require("apollo-server-express")

// Models.
const { User, Leaf } = require("../models")

// Resolvers.
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
			console.log(await Leaf.find({ ownerUsername: username }).populate("owner"))
			return await Leaf.find({ ownerUsername: username }).populate("owner")
		},

		leafs: async () => {
			// Get all leaves.
			return await Leaf.find().populate("owner")
		},

		leaf: async (parent, { leafId }) => {
			// Get a leaf by its ID.
			return await Leaf.findById(leafId).populate("owner")
		},
	},

	Mutation: {
		signUpUser: async (parent, { username, email, password }) => {
			// Sign up a user.
			const user = await User.create({
				username,
				email,
				password,
			})
			// Create a token.
			const token = signToken(user)
			return { user, token }
		},

		signInUser: async (parent, { username, email, password }) => {
			let user
			// If there’s a username, use it to find the user.
			if (username) {
				user = await User.findOne({ username })
			}
			// If there’s an email, use it to find the user.
			if (!username && email) {
				user = await User.findOne({ email })
			}
			// If there’s no user, throw an error.
			if (!user) {
				throw new AuthenticationError("User not found.")
			}			
			// If there’s a user, validate the password.
			const validatedPassword = await user.validatePassword(password)
			// If the password is incorrect, throw an error.
			if (!validatedPassword) {
				throw new AuthenticationError("Incorrect password.")
			}
			// Create a token.
			const token = signToken(user)
			return { user, token }
		},

		editUser: async (parent, { userId, username, email, password }) => {
			// Set up an empty update object.
			const update = {}
			// If there’s a username, save it to the update object.
			if (username) {
				update.username = username
			}
			// If there’s an email, save it to the update object.
			if (email) {
				update.email = email
			}
			// If there’s a password, save it to the update object.
			if (password) {
				update.password = password
			}
			// Use the update object to update the user.
			const editedUser = await User.findOneAndUpdate(
				{ _id: userId },
				update,
				{ new: true },
			)
			return editedUser
		},

		deleteUser: async (parent, { userId, username, email }) => {
			// Set up an empty query object.
			const query = {}
			// If there’s a user ID, save it to the query object.
			if (userId) {
				query._id = userId
			}
			// If there’s a username, save it to the query object.
			if (username) {
				query.username = username
			}
			// If there’s an email, save it to the query object.
			if (email) {
				query.email = email
			}
			// Use the query object to find and delete the user.
			const deletedUser = await User.findOneAndDelete(query)
			return deletedUser			
		},

		addLeaf: async (parent, { ownerUsername, title, content }) => {
			// Get the owner by their username.
			const user = await User.findOne({ username: ownerUsername })
			// Create the leaf.
			const addedLeaf = await Leaf.create({
				owner: user._id,
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
