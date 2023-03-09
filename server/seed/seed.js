// Database.
const db = require("../config/connection")

// Models.
const User = require("../models/user")
const Leaf = require("../models/leaf")

// Data.
const userSeeds = require("./userSeeds.json")
const leafSeeds = require("./leafSeeds.json")

// Seed the database.
db.once("open", async () => {
	try {
		// Delete all users and leaves.
		await Leaf.deleteMany({})
		await User.deleteMany({})

		// Create the users.
		await User.create(userSeeds)

		// Create leaves and add them to their leafs arrays.
		for (let i = 0; i < leafSeeds.length; i++) {
			// Desctructure the leaf data and find the user by ownerUsername.
			const { ownerUsername, title, content } = leafSeeds[i]
			const user = await User.findOne({ username: ownerUsername })
			// If the user’s not found, skip the leaf.
			if (!user) {
				console.log(`User ${ownerUsername} not found. Skipping leaf ${title}.`)
				continue
			}
			// Create the leaf.
			const leaf = await Leaf.create({
				owner: user._id,
				ownerUsername,
				title,
				content,
			})
			// Add the leaf to the user’s leafs array.
			user.leafs.push(leaf._id)
			await user.save()
		}
	} catch (err) {
		console.error(err)
		process.exit(1)
	}

	// Log success and exit.
	console.log("You just seeded the datbase. Nice work! 🌱")
	process.exit(0)
})
