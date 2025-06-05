const {nanoid} = require('nanoid')
const mongoose = require('mongoose')

const booking = new mongoose.Schema({
    referenceId:{type:String, default: ()=>`CDD-${nanoid(4).toUpperCase()}`},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true},
    accomodation: {type: String, enum: ["Hut", "PremiumHut", "GoldHut"], required: true},
    reservationDate: {type: Date, required: true},
    cancelled: {type: Boolean, default: false }
}, {timestamps: true})

module.exports = mongoose.model('booking', booking)