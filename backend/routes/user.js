const express = require('express')
const router = express.Router()

router.get('/test',(req, res)=>{
    res.send('testing user route')
})

module.exports = router