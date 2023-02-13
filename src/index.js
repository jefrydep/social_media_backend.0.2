const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')

// const authController = require('../src/controllers/authController')
const app = express()
//database connect

mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URL,()=> console.log( 'db is connected'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/auth',authController)





//conect backend app

app.listen(process.env.PORT,(console.log('Server is connected succesfuly')))