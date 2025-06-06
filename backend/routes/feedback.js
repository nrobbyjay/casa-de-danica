const express = require('express')
const router = express.Router()

const booking = require('../models/booking')
const feedback = require('../models/feedback')

router.post('/create', async (req, res)=>{
    let book = await booking.findOne({referenceId: req.body.referenceId})
    if(book!=null){
        try{
            let newfeed = await feedback.create(req.body)
            return res.status(200).json({message: newfeed})
        }catch(e){
            console.log(e)
            return res.status(500).json({message:"Something went wrong, try again later!"})
        }
    }
    return res.status(404).json({message:"Reference not found!"})
})

router.get('/track/:id', async(req, res)=>{
    let feed = await feedback.find({referenceId: req.params.id})
    return res.status(200).json({message:feed})
})


module.exports = router