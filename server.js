const express = require('express')
const connectDb= require('./config/db')
const carRoute = require('./routes/carRoute')
const app = express()
connectDb()

app.use(express.json())
app.use('/car',carRoute)
const PORT = 3000

app.listen(PORT,()=>{ 
    console.log("Server Running ");
    
}) 