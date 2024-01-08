require('dotenv').config()

const express = require('express')
const find = require('./routes/find')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

app.use('/api/find' , find)


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
    console.log('port 4000')
})
})
.catch((error)=>{
    console.log(error)
})

