const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    
    charName: {
        type: String,
        required: [true, "A character name is required"],
        maxlength: [26, " Character name must be 25 letters or less."]
    },

    actor: {
        type: String,
        required: [true, "An actor name is required"],
        maxlength: [25, "Actor name must be 25 letters or less."]
        
    },

    title: {
        type: String,
        required: [true, "A movie title is required"],
        maxlength: [30, "Title must be 30 letters or less"]
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
        maxlength: [85, "Quote must be under 85 letters."]
    },
    
    votes: []


}, {timestamps: true});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;