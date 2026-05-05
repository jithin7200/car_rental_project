const mongoose =require('mongoose')
require('dotenv').config()

const connnectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB CONNECTED");
        
    } catch (error) {
        console.log("DB NOT CONNECTED");
    }
}

module.exports = connnectDb