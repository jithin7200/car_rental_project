const express = require('express')
const Router = express.Router()

const carController = require('../controllers/carController')

Router.post('/createcar',carController.createCar)
Router.get('/getallpost',carController.getAllpost)


module.exports = Router                                      