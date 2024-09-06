const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Session = require('../models/Session');

// Get All Sessions
router.get('/', auth, async (req, res) => {
    try {
        const sessions = await Session.find();
        res.json(sessions);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Create Session
router.post('/', auth, async (req, res) => {
    const { attendees, start, end, duration } = req.body;
    try {
        const session = new Session({
            admin: req.user.id,
            attendees,
            start,
            end,
            duration
        });
        await session.save();
        res.json(session);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
