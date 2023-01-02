const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { db, Id } = require('../utils/client')

const users = db.collection('users')

users.read = async (req, res) => {
    try {
        const data = await users.find().project({ password: 0 }).toArray()
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

users.create = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await users.insertOne(req.body)
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

users.login = async (req, res) => {
    try {
        const user = await users.findOne({ _id: Id(req.body._id) })
        const match = await bcrypt.compare(req.body.password, user.password)

        match ? delete user.password : false
        const token = match ? jwt.sign(user, process.env.HMAC_KEY) : null
        const data = { match: match, token: token }
        
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

module.exports = users