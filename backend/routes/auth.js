const express = require('express')
const router = express.Router()


router.post('/register', (req,res)=>{
    const {username, password, email, phonenumber} = req.body

})



module.exports = router