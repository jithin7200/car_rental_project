const mongoose = require('mongoose')
const carSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    availability:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

const car = mongoose.model('car',carSchema)

module.exports= car