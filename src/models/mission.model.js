const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({
    creatorId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 2,
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
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
    },
    Collaborators: [
        { id : String  }
    ]
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Mission', missionSchema);