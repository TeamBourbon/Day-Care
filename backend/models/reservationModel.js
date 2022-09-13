const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    date: {
        type: Date,
        required: [true, 'Please add a date']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Reservation', reservationSchema)