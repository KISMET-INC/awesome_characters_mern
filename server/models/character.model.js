const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    
    charName: {
        type: String,
        required: [true, "A character name is required"]
    },

    actor: {
        type: String
    },

    title: {
        type: String,
        required: [true, "A Movie Title is required"]
    },

    year: {
        type: Number,
    },

    url: {
        type: String,
    },

    quote: {
        type: String,
    },
    
    votes: []


}, {timestamps: true});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;