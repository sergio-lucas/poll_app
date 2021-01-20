const express = require('express')
const passport = require('passport')

const router = express.Router()

// router.post('/login', PollCtrl.getPolls)

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' })
);

module.exports = router