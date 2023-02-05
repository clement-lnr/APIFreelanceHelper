const User = require('../models/user.model');
const bcrypt = require('bcrypt')

exports.register = (req, res) => {

    let hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mail: req.body.mail,
        password: hashedPassword,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        city: req.body.city,
        zipCode: req.body.zipCode,
        type: req.body.type,
        isAdmin: false
    });

    newUser.save()
    .then(data => {
        res.send(data);
    })
    .catch (err => {
        console.log(err);
    })
}