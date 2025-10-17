const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    badgeName: {
        type: String,
        required: true,
        trim: true
    },
    dateEarned:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Achievement', logSchema);