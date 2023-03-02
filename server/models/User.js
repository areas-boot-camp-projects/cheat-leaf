// Dependencies.
const { Schema, model } = require("mongoose")

// ** todo: add bcrypt. **

// Schema.
const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
			match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"You must enter a valid email."
			],
		},
    password: {
      type: String,
      required: true,
    },
		leafs: [
			{
				type: Schema.Types.ObjectId,
				ref: "Leaf",
			},
		],
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

// Format createdAt.
userSchema
	.virtual("createdAtFormatted")
	.get(function () {
		return new Intl.DateTimeFormat("en-US", {
			dateStyle: "medium",
			timeStyle: "short",
		})
			.format(this.createdAt)
	})

// Format updatedAt.
userSchema
	.virtual("updatedAtFormatted")
	.get(function () {
		return new Intl.DateTimeFormat("en-US", {
			dateStyle: "medium",
			timeStyle: "short",
		})
			.format(this.updatedAt)
	})

// Count a user’s leaves.
userSchema
	.virtual("leafCount")
	.get(function () {
		return this.leafs.length
	})

// Model.
const User = model("User", userSchema)

module.exports = User
