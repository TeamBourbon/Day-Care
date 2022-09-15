const asyncHandler = require('express-async-handler')
const Location = require('../models/locationModel')

const addLocation = asyncHandler( async (req, res) => {
    
    const { branchName, state, city, zip } = req.body

    if(!branchName || !state || !city || !zip) {
        res.status(400)
        throw new Error('Please add all required fields')
    }

    const location = await Location.create({
        branchName,
        state,
        city,
        zip,
    })

    if(location) {
        res.status(201).json({
            _id: location.id,
            branchName: location.branchName,
            state: location.state,  
            city: location.city,
            zip: location.zip,
        })
    } else {
        res.status(400)
        throw new Error('Invalid location data')
    }

})

const getLocation = asyncHandler( async (req, res) => {
    const locations = await Location.find()

    res.status(200).json(locations)
})

module.exports = {
    addLocation,
    getLocation,
}