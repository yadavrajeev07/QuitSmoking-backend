const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    cigarettesPerDay: {
        type: Number,
        default: 0
    },
    streak: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model('User', userSchema);
