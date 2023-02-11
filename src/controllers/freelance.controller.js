const User = require('../models/user.model');
const Freelance = require('../models/freelance.model');

exports.createFreelance = async (req, res) => {
    const newFreelance = new Freelance({
        userId: req.userToken.id,
        dailyPrice: req.body.dailyPrice,
        experienceYears: req.body.experienceYears,
    });

    try{
        await newFreelance.save()
        .then((freelance) => {
            res.send({
                message: "Freelance registered",
                freelance: freelance
            });
        })
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getFreelance = (req, res) => {
    User.find({type: "freelance"})
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        res.status(400).send(err);
    })
}

exports.getFreelanceDetails = async (req, res) => {
    Freelance.findOne({ userId: req.params.id })
    .then(freelance => {
        res.send(freelance);
    })
    .catch(err => {
        res.status(400).send(err);
    })
}

