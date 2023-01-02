const dotenv = require('dotenv')
const express = require('express')

dotenv.config()
const app = express()

const mw = require('./middleware')

const users = require('./routes/users')
const token = require('./routes/token')
const paxs = require('./routes/paxs')
const pays = require('./routes/pays')
const retires = require('./routes/retires')

const spa = require('./routes/spa')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api', mw.logs)
app.use('/api', mw.authorization)

app.use('/api/users', users)
app.use('/api/token', token)
app.use('/api/paxs', paxs)
app.use('/api/pays', pays)
app.use('/api/retires', retires)

app.use(spa)

app.listen(process.env.PORT, process.env.IP, () => console.log('app running...'))