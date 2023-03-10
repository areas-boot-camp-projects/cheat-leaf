// Dependencies.
const jwt = require("jsonwebtoken")
const { AuthenticationError } = require("apollo-server-express")
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

// Verify a token.
function verifyToken({ req }) {
	// Get the token.
	let token = req.headers.authorization || req.query.token || req.body.token
	// If it’s an authorisation header, split the string to get the token.
	if (req.headers.authorization) {
		token = token.split("Bearer ")[1]
		if (token) {
			try {
				const { data } = jwt.verify(token, secret)
				return { data }
			} catch (err) {
				throw new AuthenticationError("Token is invalid.")
			}
		} else {
			return { req }
		}
	} else {
		return { req }
	}
}

module.exports = {
	signToken,
	verifyToken,
}
