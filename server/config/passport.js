const passport = require('passport'),
      FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../models/user-model')

passport.use(new FacebookStrategy({
    clientID: 420331932529301,
    clientSecret: "488e0046259c88977724ed529fd85091",
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));