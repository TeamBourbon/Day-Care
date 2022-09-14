const asyncHandler = require('express-async-handler')
const Reservation = require('../models/reservationModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')

const getReservations = asyncHandler( async (req, res) => {
    const reservations = await Reservation.find({ user: req.user.id })

    res.status(200).json({reservations})
})

const createReservations = asyncHandler( async (req, res) => {

    const location = mongoose.Types.ObjectId(req.body.location)
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a name for reservation')
    }
    if(!req.body.date) {
        res.status(400)
        throw new Error('Please add a date for reservation')
    }
    if(!location) {
        res.status(400)
        throw new Error('Please select a location')
    }
    const reservation = await Reservation.create({
        name: req.body.name,
        date: req.body.date,
        user: req.user.id,
        location
    })

    res.status(200).json(reservation) 
})

const editReservations = asyncHandler( async (req, res) => {
    const reservation = await Reservation.findById(req.params.id)

    if(!reservation) {
        res.status(400)
        throw new Error('Reservation not found')
    }

    const user = await User.findById(req.user.id)
    //Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure users match
    if(reservation.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json(updatedReservation)
})

const deleteReservations = asyncHandler( async (req, res) => {
    const reservation = await Reservation.findById(req.params.id)

    if(!reservation) {
        res.status(400)
        throw new Error('Reservation not found')
    }

    const user = await User.findById(req.user.id)
    //Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure users match
    if(reservation.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await reservation.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getReservations,
    createReservations,
    editReservations,
    deleteReservations
}