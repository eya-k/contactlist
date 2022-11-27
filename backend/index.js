const express = require ('express')
const connectddb = require('./config/connectdb')
const ContactRouter = require('./routes/Contact')

var cors = require('cors')
const app = express()

const port = process.env.port

require('dotenv').config();
//link db

connectddb() 



//partie routes
app.use(cors())
app.use(express.json()) 
app.use('/api/user',ContactRouter)

