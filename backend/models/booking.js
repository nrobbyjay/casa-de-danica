const mongoose = require('mongoose')

const booking = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true},
    accomodation: {type: String, enum: ["Hut", "PremiumHut", "GoldHut"], required: true},
    reservationDate: {type: Date, required: true},
}, {timestamps: true})

module.exports = mongoose.model('booking', booking)