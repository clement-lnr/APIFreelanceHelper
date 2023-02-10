const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        city: req.body.city,
        zipCode: req.body.zipCode,
        type: req.body.type,
        isAdmin: false
    });

    try{
        await newUser.save()
        .then((user) => {
            let userToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin
                }, process.env.JWT_SECRET_KEY
            );
            res.send({
                message: "User registered",
                auth: true,
                token: userToken,
                userId: user._id,
            });
        })
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
    .then((user) => {
        if(!user) {
            return res.status(404).send({
                message: "user not found"
            });
        }
        let passwordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordValid) {
            return res.status(401).send({
                message: "password not valid",
                auth: false
            });
        }
        let userToken = jwt.sign(
            {
                id: user._id,
                userType: user.type,
                isAdmin: user.isAdmin,
            },process.env.JWT_SECRET_KEY
        )
        res.send({
            message: "User logged",
            auth: true,
            token:userToken
        })
    })
    .catch(err=>res.status(400).send(err))
}