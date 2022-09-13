const express = require('express')
const router = express.Router()
const {getReservations, createReservations, editReservations, deleteReservations} = require('../controllers/reservationController')

router.route('/').get(getReservations).post(createReservations)

router.route('/:id').delete(deleteReservations).put(editReservations)

module.exports = router