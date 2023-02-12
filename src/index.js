const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
//database connect





//conect backend app

app.listen(process.env.PORT,(console.log('Server is connected succesfuly')))