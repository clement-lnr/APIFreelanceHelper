const User = require('../models/user.model');

exports.getUser = (req, res) => {
    User.findOne({_id : req.userToken.id})
    .then(user => {
        res.send({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            city: user.city,
            zipCode: user.zipCode,
            type: user.type
        });
    })
    .catch(err => {
        res.status(400).send(err);
    })
}
exports.updateUser = (req, res) => {
    User.findOneAndUpdate(req.userToken.id, req.body)
    .then(user => {
        if (!user) {
            return res.status(404).send({
                message: 'User not found'
            })
        }
        User.findById(user._id).then(userupdated => {
            res.send({
                email: userupdated.email,
                firstName: userupdated.firstName,
                lastName: userupdated.lastName,
                password: userupdated.password,
                phoneNumber: userupdated.phoneNumber,
                address: userupdated.address,
                city: userupdated.city,
                zipCode: userupdated.zipCode,
                type: userupdated.type
            });
        })
    })
    .catch(err => {
        res.status(400).send(err);
    })
}