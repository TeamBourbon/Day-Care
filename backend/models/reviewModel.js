const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    body: {
        type: String,
        required: [true, 'Please add a review']
    },
    rate: {
        type: Number,
        required: [true, 'Please select a rating']
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add a location'],
        ref: 'Location'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema)
