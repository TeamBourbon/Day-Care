const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

connectDB()

const app = express()

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/reservations', require('./routes/reservationRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/locations', require('./routes/locationRoutes'))
app.use('/api/staff', require('./routes/staffRoutes'))
app.use('/api/reviews', require('./routes/reviewRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
