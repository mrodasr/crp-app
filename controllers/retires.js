const { db } = require('../utils/client')

const retires = db.collection('retires')

retires.read = async (req, res) => {
    try {
        const data = await retires.find().sort({ created: -1 }).toArray()
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

retires.create = async (req, res) => {
    try {
        const data = await retires.insertOne(req.body)
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

module.exports = retires