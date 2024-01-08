const express = require('express')
const Find = require('../models/findmodel')
const router = express.Router()

router.get('/' , async (req , res)=>{

    const {Tsalary} = req.body

    const found = await Find.find({ salary: { $gt: Tsalary } })
    res.status(200).json(found)

    
})


router.post('/' ,async (req , res) =>{

    const {salary} = req.body

    try {
        const find = await Find.create({salary})
        res.status(200).json(find)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports = router