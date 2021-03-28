const Character = require("../models/character.model");

module.exports.findAllCharacters = (req, res) => {
    Character.find()
        .then((allCharacters) => res.json({ characters: allCharacters }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleCharacter = (req, res) => {
    Character.findOne({ _id: req.params.id })
        .then((oneSingleCharacter) => res.json(oneSingleCharacter ))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewCharacter = (req, res) => {
    Character.create(req.body)
        .then((newCharacter) => res.json({ character: newCharacter }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingCharacter = (req, res) => {
    Character.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedCharacter) => res.json({ character: updatedCharacter }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingCharacter = (req, res) => {
    Character.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
