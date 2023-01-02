const { Router } = require('express')

const pays = require('../controllers/pays')

const router = Router()

router.get('/', pays.read)
router.post('/', pays.create)

module.exports = router