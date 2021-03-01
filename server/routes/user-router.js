const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken');

const router = express.Router()

var createToken = function(auth) {
  return jwt.sign({
    id: auth.id
  }, 'my-secret',
  {
    expiresIn: 60
  });
};

var generateToken = function (req, res, next) {
  req.token = createToken(req.auth);
  next();
};

var sendToken = function (req, res) {
  res.setHeader('x-auth-token', req.token);
  res.status(200).send(req.auth);
};

// router.post('/auth/facebook/token',
//   passport.authenticate('facebook-token', {failureRedirect: '/login'}),
//   function (req, res) {
//     // do something with req.user
//     res.send(req.user? 200 : 401);
//   }
// );

router.route('/auth/facebook/token')
  .post(passport.authenticate('facebook-token', {session: true}), function(req, res, next) {
    if (!req.user) {
      return res.send(401, 'User Not Authenticated');
    }

    // prepare token for API
    req.auth = {
      id: req.user.id
    };

    next();
  },
  generateToken, sendToken)
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}));

router.route('/auth/google/token')
.post(passport.authenticate('google-token'), function(req, res, next) {
  if (!req.user) {
    return res.send(401, 'User Not Authenticated');
  }

  // prepare token for API
  req.auth = {
    id: req.user.id
  };

  next();
},
generateToken, sendToken)

// router.get('/auth/google', passport.authenticate('google', { 
//     scope: ['https://www.googleapis.com/auth/userinfo.email',
//             'https://www.googleapis.com/auth/userinfo.profile']
// }));

// router.get('/auth/google/callback', passport.authenticate('google', {
//     failureRedirect: '/login' 
//   }),
//   function(req, res) {
//     res.redirect('/profile');
// });

module.exports = router