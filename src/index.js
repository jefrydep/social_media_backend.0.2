const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')
const commentController = require('./controllers/commentController')

// const authController = require('../src/controllers/authController')
const app = express()
//database connect

mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URL,()=> console.log( 'db is connected'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/auth',authController)
app.use('/user',userController)
app.use('/post',postController)
app.use('/comment',commentController)




//conect backend app

app.listen(process.env.PORT,(console.log('Server is connected succesfuly')))