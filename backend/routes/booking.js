const express = require('express')
const router = express.Router()

const booking = require('../models/booking')


router.get('/track/:id',async (req, res)=>{
    try{
        let book = await booking.findOne({referenceId: req.params.id})
        if(!book) return res.status(404).json({error: 'reference not found!'})
        return res.json(book)
    }catch(e){
        console.log(e)
        res.status(500).json({error:'Something went wrong, please try again'})
    }
})

router.post('/create', async (req,res)=>{
    try{
        await booking.create(req.body)
        return res.send(200)
    }catch(e){
        console.log(e)
        return res.status(400).json(e._message)
    }

})

router.put('/cancel',async (req, res)=>{
    try{
        let book = await booking.findOneAndUpdate({referenceId: req.body.referenceId}, {cancelled: true}, { new: true, runValidators: true })
        if(!book) return res.status(404).json({error: "reference not found"})
        return res.status(200)
    }catch(e){
        console.log(e)
        return res.status(500)
    }
})

module.exports = router