const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2,
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2,
    },
    job: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2,
    },
    skills: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2,
    },
    startDate: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2,
    },
    endDate: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2,
    },
    totalAmount: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2,
    },
    status: {
        type: String,
        required: true,
        lowercase: true,
        maxLength: 50,
        minLength: 2,
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Mission', missionSchema);