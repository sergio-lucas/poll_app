const express = require('express')
const passport = require('passport')

const router = express.Router()

// router.post('/login', PollCtrl.getPolls)

router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
router.get('/auth/facebook/callback', 
  passport.authenticate('facebook', {
    successRedirect: '/', failureRedirect: '/login'
  })
);

router.get('/auth/google',
  passport.authenticate('google', { 
    scope: ['https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile']
  }));
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router