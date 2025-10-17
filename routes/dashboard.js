const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const authMiddleware = require('../middleware/authmiddleware');


router.get('/', authMiddleware, async (req, res) => {
          const user = await User.findById(req.user.id).select('-passwordHash');
          const logs = await Log.find({ userId: req.user.id, timestamp:{ $gte: new Date(new Date().setHours(0,0,0,0)) }}).sort({ timestamp: -1 });
          
          const cigarettesToday = logs.filter(log => log.type === 'cigarette').length;
          const cravingsToday = logs.filter(log => log.type === 'craving').length;
          const mondeySaved = user.cigarettesPerDay * 0.5; // Assuming $0.5 per cigarette
          const totalDays = Math.floor((new Date() - user.startDate) / (1000 * 60 * 60 * 24));
          const streak = user.streak;
            res.json({
                cigarettesToday,
                cravingsToday,
                mondeySaved,
                streak,
                streak :user.streak,
                totalDays
            });
        });

module.exports = router;