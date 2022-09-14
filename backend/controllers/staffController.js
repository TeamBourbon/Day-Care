const asyncHandler = require('express-async-handler')
const Staff = require('../models/staffModel')
const Location = require('../models/locationModel')
const mongoose  = require('mongoose')

const addStaff = asyncHandler( async (req, res) => {
    const { name, title, bio, pic, location } = req.body
    mongoose.Types.ObjectId(location)
    
    if(!name || !title || !bio || !location) {
        res.status(400)
        throw new Error('Please add all required fields')
    }

    const locationExists = await Location.findById(mongoose.Types.ObjectId(location))

    if(!locationExists) {
        res.status(400)
        throw new Error('Location does not exists')
    }

    const staff = await Staff.create({
        name,
        title,
        bio,
        pic,
        location,
    })

    if(staff) {
        res.status(201).json({
            _id: staff.id,
            name: staff.id,
            title: staff.title,
            bio: staff.bio,
            pic: staff.pic, 
            location: staff.location
        }) 
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }    
})

const getStaff = asyncHandler( async (req, res) => {
    const staff = await Staff.find()

    res.status(200).json(staff)
})

const editStaff = asyncHandler( async (req, rees) => {
    const staff = await Staff.findById(req.params.id)

    if(!staff) {
        res.status(400)
        throw new Error('Staff not found')
    }

    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { 
        new: true,
    })

    res.status(200).json(updatedStaff)
})

const deleteStaff = asyncHandler( async (req, res) => {
    const staff = await Staff.findById(req.params.id)

    if(!staff) {
        res.status(400)
        throw new Error('Staff not found')
    }

    await staff.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    addStaff,
    getStaff,
    editStaff,
    deleteStaff
}