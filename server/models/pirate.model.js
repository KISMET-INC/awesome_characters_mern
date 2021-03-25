const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Server: Name is required"]
	},
	url: {
		type: String,
		required: [true, "Server: Image Url is required"],
	},

	chests: {
		type: Number,
		required: [true, "Server: Number of chests is required"],
		min: [0, "Server: You cannot have less that 0 chests"]
	},

	phrase: {
		type: String,
		required: [true, "Server: Catch phrase is required"],
	},

	position: {
		type: String,
		required: [true, "Server: Crew position is required"],
	},

	leg: {
		type: Boolean,
		//required: [true, "Peg Leg is required"],
	},

	eye: {
		type: Boolean,
		//required: [true, "Eye is required"],
	},

	hook: {
		type: Boolean,
		//required: [true, "Hook hand is required"],
	},


},{timestamps: true});

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;