const { get } = require('mongoose')
const car = require('../models/carModel')

const createCar = async (req, res) => {
  const { name, type, brand, price, availability } = req.body
  try {
    const newData = await new car({
      name, 
      type,
      brand,
      price,
      availability
    })
    await newData.save()
    res.status(200).json({ msg: "Created successfully", data: newData })
  } catch (error) {
    res.status(200).json({ msg: "Server error", error: error })

  }
}

//  read 
const getAllpost = async (req,res) => {
  try {
     const posts = await car.find().sort({createdAt:-1})
     res.status(200).json({msg:"All post",data:posts})

  } catch (error) {
      res.status(500).json({msg:"server error"})
  }
}

// update

const updatePost = async(req,res)=>{
  
}


module.exports = { createCar ,getAllpost}