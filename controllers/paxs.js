const { db, Id } = require('../utils/client')

const paxs = db.collection('paxs')

paxs.read = async (req, res) => {
    try {
        const data = await paxs.find().sort({ checkin: -1 }).toArray()
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

paxs.create = async (req, res) => {
    try {
        const data = await paxs.insertOne(req.body)
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

paxs.update2 = async (req, res) => {
    try {
        const data = await paxs.updateOne({ _id: Id(req.params._id )}, { $set: { ...req.body } })
        res.status(200).json(data)
    }
    catch {
        res.sendStatus(500)
    }
}

module.exports = paxs