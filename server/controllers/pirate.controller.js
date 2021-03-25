const Pirate = require("../models/pirate.model");

module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then((allDaPirates) => res.json({ pirates: allDaPirates }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSinglePirate = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then((oneSinglePirate) => res.json({ pirate: oneSinglePirate }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPirate = (req, res) => {
    Pirate.create(req.body)
        .then((newlyCreatedPirate) => res.json({ pirate: newlyCreatedPirate }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPirate = (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedPirate) => res.json({ pirate: updatedPirate }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingPirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createUniquePirate = (req, res) => {
    Pirate.exists({ title: req.body.title })
        .then((PirateExits) => {
            if (PirateExits) { 
                return Promise.reject("Pirate Exists");}
            return Pirate.create(req.body).then((s) => res.json({ success: true }));
        }).catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateUniqueExistingPirate = (req, res) => {
    Pirate.exists({ title: req.body.title })
        .then((PirateExists) => {
            if (PirateExists) {

                Pirate.findOne({ title: req.body.title })
                    .then((foundPirate) => {

                        if (req.params.id != foundPirate._id) { 
                            return Promise.reject("Pirate Exists");
                        }

                        return Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                                .then((s) => res.json({ success: true }))
                                .catch((err)=> console.log(err))
                    }).catch((err) => res.json({ message: "Something went wrong", error: err }));

            } else {

                return Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                        .then((s) => res.json({ success: true }))
                        .catch((err)=> console.log(err))
            }
        }).catch((err) => res.json({ message: "Something went wrong", error: err }));
};
