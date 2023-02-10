const mongoose = require('mongoose');

const entrepriseSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    siretNumber: {
        type: Number,
        required: true,
    },
    headOffice: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Entreprise', entrepriseSchema);