const express = require('express')

const PollCtrl = require('../controllers/poll-ctrl')

const router = express.Router()

router.post('/poll', PollCtrl.createPoll)
router.put('/poll/:id', PollCtrl.updatePoll)
router.delete('/poll/:id', PollCtrl.deletePoll)
router.get('/poll/:id', PollCtrl.getPollById)
router.get('/polls', PollCtrl.getPolls)

module.exports = router
