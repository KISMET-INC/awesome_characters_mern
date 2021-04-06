const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    
    charName: {
        type: String,
        required: [true, "A character name is required"]
    },

    actor: {
        type: String,
        required: [true, "An actor name is required"]
    },

    title: {
        type: String,
        required: [true, "A movie title is required"]
    },

    year: {
        type: Number,
        required: [true, "A released year is required"]
    },

    url: {
        type: String,
        required: [true, "An image URL name is required"]
    },

    quote: {
        type: String,
        required: [true, "A quote is required"]
    },
    
    votes: []


}, {timestamps: true});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;