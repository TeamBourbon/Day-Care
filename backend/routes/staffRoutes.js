const express = require('express')
const router = express.Router()
const { 
    addStaff, 
    getStaff, 
    editStaff, 
    deleteStaff } = require ('../controllers/staffController')

router.route('/').get(getStaff).post(addStaff)
router.route('/:id').delete(deleteStaff).put(editStaff)

module.exports = router