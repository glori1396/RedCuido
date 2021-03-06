require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');

const homeRoute = require('./routes/homeRoute')
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 8079)

mongoose.connect(process.env.DBM)

app.use('/home', homeRoute)


app.listen(app.get('port'), err => {
  if (err) return console.log(`Ha ocurrido un error ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



