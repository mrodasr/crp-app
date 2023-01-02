const { Router } = require('express')

const retires = require('../controllers/retires')

const router = Router()

router.get('/', retires.read)
router.post('/', retires.create)

module.exports = router