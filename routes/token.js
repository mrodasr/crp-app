const { Router } = require('express')

const users = require('../controllers/users')

const router = Router()

router.post('/', users.login)

module.exports = router