// Dependencies.
const { Schema, model } = require("mongoose")

// Schema.
const leafSchema = new Schema(
	{
		ownerId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		ownerUsername: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			getters: true,
			virtuals: true,
		},
		id: false,
	},
)

// Model.
const Leaf = model("Leaf", leafSchema)

module.exports = Leaf
