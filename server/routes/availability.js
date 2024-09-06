const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Availability = require('../models/Availability');

// Get User Availability
router.get('/', auth, async (req, res) => {
    try {
        const availability = await Availability.findOne({ user: req.user.id });
        if (!availability) return res.status(400).json({ msg: 'No availability found' });
        res.json(availability);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Update/Add Availability
router.post('/', auth, async (req, res) => {
    const { slots } = req.body;
    try {
        let availability = await Availability.findOne({ user: req.user.id });
        if (!availability) {
            availability = new Availability({ user: req.user.id, slots });
        } else {
            availability.slots = slots;
        }
        await availability.save();
        res.json(availability);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
