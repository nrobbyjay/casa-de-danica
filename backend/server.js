require('dotenv').config()

const express = require('express')

const cors = require('cors')

const {connectInMemoryDB} = require('./db/memory')

const app = express()
app.use(cors())
app.use(express.json())

const booking = require('./routes/booking')
app.use('/api/booking', booking)

const payment = require('./routes/payment')
app.use('/api/payment', payment)

const user = require('./routes/user')
app.use('/api/user', user)



const server = app.listen(process.env.PORT, ()=>{
    console.log(`Service is starting at port ${process.env.PORT}`)
    connectInMemoryDB()
})
server.on('error', (e)=>{
    console.log(`Problem starting server: ${e}`)
})