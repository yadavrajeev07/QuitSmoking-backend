const express = require('express');
const router = express.Router();
const Log = require('../models/log');
const authMiddleware = require('../middleware/authmiddleware');

// Create a new log entry
router.post('/', authMiddleware, async (req, res) => {
    const { type, notes } = req.body;   
    const newLog = new Log({
        userId: req.user.id,
        type,
        notes
    });
    await newLog.save();
    res.status(201).json(newLog);
});

// Get all log entries for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
    const logs = await Log.find({ userId: req.user.id }).sort({ timestamp: -1 });
    res.json(logs);
});

module.exports = router;