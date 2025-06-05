const express = require('express')
const router = express.Router()

const booking = require('../models/booking')


router.get('/test',(req, res)=>{
    res.send('testing booking route')
})

router.post('/create', async (req,res)=>{
    try{
        await booking.create(req.body)
        return res.send(200)
    }catch(e){
        return res.status(400).json(e._message)
    }

})

module.exports = router