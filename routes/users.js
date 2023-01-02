const { Router } = require('express')

const users = require('../controllers/users')

const router = Router()

router.get('/', users.read)
router.post('/', users.create)

module.exports = router