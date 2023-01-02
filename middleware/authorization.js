const jwt = require('jsonwebtoken')

const routes = [
    {
        method: 'GET',
        path: '/users'
    },
    {
        method: 'POST',
        path: '/token'
    }
]

const open = (req) => {
    try {
        req.route = { method: req.method, path: req.path }
        const open = (route) => JSON.stringify(route) == JSON.stringify(req.route)
        return routes.some(open)
    }
    catch {
        return false
    }
}

const verify = (req, res, next) => {
    try {
        const token = req.headers.authorization
        req.user = jwt.verify(token, process.env.HMAC_KEY)
        next()
    }
    catch {
        res.sendStatus(401)
    }
}

const authorization = (req, res, next) => open(req) ? next() : verify(req, res, next)

module.exports = authorization