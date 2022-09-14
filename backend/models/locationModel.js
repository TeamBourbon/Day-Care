const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    branchName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Location', locationSchema)