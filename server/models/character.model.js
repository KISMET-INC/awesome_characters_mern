const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    
    charName: {
        type: String,
        required: [true, "A character name is required"],
        maxlength: [15, "Name must be 15 letters or less."]
    },

    actor: {
        type: String,
        required: [true, "An actor name is required"],
        maxlength: [15, "Name must be 15 letters or less."]
    },

    title: {
        type: String,
        required: [true, "A movie title is required"],
        maxlength: [20, "Title must be 20 letters or less"]
    },

    year: {
        type: Number,
        required: [true, "A released year is required"],
        min: [1900, "Year must be 1900 or later."],
        max: [new Date().getFullYear(), "Year must be no later than this year "]
    },

    url: {
        type: String,
        required: [true, "An image URL name is required"]
    },

    quote: {
        type: String,
        required: [true, "A quote is required"],
        maxlength: [70, "Quote must be under 70 letters."]
    },
    
    votes: []


}, {timestamps: true});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;