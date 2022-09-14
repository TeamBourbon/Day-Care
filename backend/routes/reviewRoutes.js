const express = require('express')
const router = express.Router()
const { addReview, getReviews, deleteReview } = require('../controllers/reviewController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, addReview).get(getReviews)
router.route('/:id').delete(protect, deleteReview)

module.exports = router