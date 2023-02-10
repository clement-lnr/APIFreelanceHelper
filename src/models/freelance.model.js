const mongoose = require('mongoose');

const freelanceSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    dailyPrice: {
        type: Number,
        required: true
    },
    experienceYears: {
        type: Number,
        required: true
    },
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "skill"  
    }],
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "job"
    }],
})

module.exports = mongoose.model('Freelance', freelanceSchema);