require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

const booking = require('./routes/booking')
app.use('/api/booking', booking)

const payment = require('./routes/payment')
app.use('/api/payment', payment)

const user = require('./routes/user')
app.use('/api/user', user)


const serve = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOURI)
        const server = app.listen(process.env.PORT, ()=>{
            console.log(`Serving at port ${process.env.PORT}`)

        })

    }catch(e){
        console.log('An error occured starting server: ' + e)
    }

}
console.log(Date.now())
serve()
