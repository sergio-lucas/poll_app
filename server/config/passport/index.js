const passport = require('passport');

const facebookStrategy = require('./strategies/facebookStrategy');
const googleStrategy = require('./strategies/googleStrategy');
const User = require('../../models/user-model');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(facebookStrategy());
passport.use(googleStrategy());