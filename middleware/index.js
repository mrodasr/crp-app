const mw = {}

const logs = require('./logs')
const authorization = require('./authorization')

mw.logs = logs
mw.authorization = authorization

module.exports = mw