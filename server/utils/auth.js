// Dependencies.
const jwt = require("jsonwebtoken")
require("dotenv").config()

// Token secret and expiration.
const secret = process.env.JWT_SECRET
const expiration = process.env.JWT_EXPIRATION

// Sign a token.
function signToken({ _id, username, email }) {
	const payload = { _id, username, email }
	return jwt.sign({ data: payload }, secret, { expiresIn: expiration },
	)
}

module.exports = {
	signToken,
}
