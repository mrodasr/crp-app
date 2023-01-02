const logs = (req, res, next) => {
    console.log(req.method, req.path, req.headers.host)
    next()
}

module.exports = logs