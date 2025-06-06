const mongoose = require('mongoose')

const feedback = new mongoose.Schema({
    referenceId: {type: String, require: true},
    comments: {type: String, require: true},

}, {timestamps: true})

module.exports = mongoose.model('feedback', feedback)