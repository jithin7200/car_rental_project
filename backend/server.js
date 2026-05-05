const express = require('express')
const connectDb = require('./config/db')
connectDb()
const app  = express()

const  PORT = 3000

app.listen(PORT,()=>{
    console.log("SRVER RUNNING");
    
})