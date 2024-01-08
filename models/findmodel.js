const mongoose = require('mongoose')

const Schema = mongoose.Schema

const findSchema = new Schema({
    salary :{
        type:Number,
        required:true
    }
} , {timestamps:true})

module.exports = mongoose.model('Find' , findSchema)