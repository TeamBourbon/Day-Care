const express = require('express')
const router = express.Router()
const { addLocation, getLocation } = require('../controllers/locationController')

router.post('/', addLocation)
router.get('/', getLocation)

module.exports = router