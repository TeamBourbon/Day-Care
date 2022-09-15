const asyncHandler = require('express-async-handler')
const Review = require('../models/reviewModel')
const Location = require('../models/locationModel')
const User = require('../models/userModel')
const mongoose  = require('mongoose')

const getReviews = asyncHandler( async (req, res) => {
    const reviews = await Review.find()

    res.status(200).json(reviews)
})

const addReview = asyncHandler( async (req, res) => {
    const { body, rate, location } = req.body
    
    mongoose.Types.ObjectId(location)

    if(!body || !rate || !location) {
        res.status(400)
        throw new Error('Please add all required fields')
    }

    if(rate < 0 || rate > 5) {
        res.status(400)
        throw new Error('Rate should be between 0 and 5')
    }

    const locationExists = await Location.findById(location)

    if(!locationExists) {
        res.status(400)
        throw new Error('Location does not exists')
    }

    const review = await Review.create({
        body,
        rate,
        user: req.user.id,
        location
    })

    if(review) {
        res.status(200).json(review)
    } else {
        res.status(400)
        throw new Error('Invalid review data')
    }

})

const deleteReview = asyncHandler( async (req, res) => {
    const review = await Review.findById(req.params.id)

    if(!review) {
        res.status(400)
        throw new Error('Review not found')
    }

    const user = await User.findById(req.user.id)
    //Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure users match
    if(review.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await review.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getReviews,
    addReview,
    deleteReview
}