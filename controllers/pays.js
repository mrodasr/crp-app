const { db } = require('../utils/client')

const pays = db.collection('pays')

pays.read = async (req, res) => {
    try {
        const data = await pays.find().sort({ created: -1 }).toArray()
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

pays.create = async (req, res) => {
    try {
        const data = await pays.insertOne(req.body)
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

module.exports = pays