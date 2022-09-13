const express = require('express')
const router = express.Router()
const {getReservations, 
    createReservations, 
    editReservations, 
    deleteReservations
    } = require('../controllers/reservationController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getReservations).post(protect, createReservations)

router.route('/:id').delete(protect, deleteReservations).put(protect, editReservations)

module.exports = router