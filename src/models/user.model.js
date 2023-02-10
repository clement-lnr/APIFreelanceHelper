const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 30,
        minLenght: 2
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50,
        minLenght: 2
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 20,
        minLenght: 5
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        maxLength: 20,
        minLenght: 5
    },
    address: {
        type: String,
        required: true,
        maxLength: 50,
        minLenght: 5
    },
    city: {
        type: String,
        required: true,
        maxLength: 20,
        minLenght: 5
    },
    zipCode: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 10,
        minLenght: 5
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema);