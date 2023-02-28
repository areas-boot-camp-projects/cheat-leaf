// Dependencies.
const mongoose = require("mongoose")

// Connect to the database.
const db = "cheatLeaf"
async function connectToMongo() {
	try {
		await mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${db}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log(`Connected to the ${db} database! ✅`)
	} catch (err) {
		console.error(err)
	}
}

connectToMongo()

module.exports = mongoose.connection
