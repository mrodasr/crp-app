const { Router } = require('express')

const paxs = require('../controllers/paxs')

const router = Router()

router.get('/', paxs.read)
router.post('/', paxs.create)
router.patch('/:_id', paxs.update2)

module.exports = router