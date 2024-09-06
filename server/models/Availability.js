const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    slots: [{
        start: Date,
        end: Date,
        duration: Number
    }]
});

module.exports = mongoose.model('Availability', AvailabilitySchema);
