const asyncHandler = require('express-async-handler')

const getReservations = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Get reservations' })
})

const createReservations = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Create reservation' })
})

const editReservations = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Edit reservation ${req.params.id}` })
})

const deleteReservations = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete reservation ${req.params.id}` })
})

module.exports = {
    getReservations,
    createReservations,
    editReservations,
    deleteReservations
}