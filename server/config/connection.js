// Dependencies.
const mongoose = require("mongoose")
const db = "cheatLeaf"
mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1/${db}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

module.exports = mongoose.connection
