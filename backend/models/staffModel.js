const mongoose = require('mongoose')

const staffSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    bio: {
        type: String,
        required: [true, 'Please add a bio']
    },
    pic: {
         type: String,
         required: false
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add a location'],
        ref: 'Location'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Staff', staffSchema)