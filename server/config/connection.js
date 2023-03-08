// Dependencies.
const mongoose = require("mongoose")
const db = "cheatLeaf"
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${db}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

module.exports = mongoose.connection
