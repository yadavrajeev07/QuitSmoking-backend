const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['cigarette','craving',],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Log', userSchema);