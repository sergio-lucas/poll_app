const passport = require('passport'),
      FacebookStrategy = require('passport-facebook').Strategy,
      GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/user-model')

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: 420331932529301,
    clientSecret: "488e0046259c88977724ed529fd85091",
    callbackURL: "http://localhost:5000/api/auth/facebook/callback",
    profileFields: ["first_name", "emails", "displayName", "photos"],
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("Auth done");
    const newUser = {
      name: profile.displayName
    }
    const search = {
      email: profile.emails ? profile.emails[0].value : "no_email@gmail.com"
    }
    User.findOrCreate(search, newUser, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

passport.use(new GoogleStrategy({
  clientID: "286349677291-4rr1ftn907c6tug6s1ni6bkfrql1403g.apps.googleusercontent.com",
  clientSecret: "I35kC2jMdLu5k-hKt4H1xByJ",
  callbackURL: "http://localhost:5000/api/auth/google/callback",
  profileFields: ["first_name", "emails", "displayName", "photos"]
},
  function(accessToken, refreshToken, profile, done) {
    const newUser = {
      name: profile.displayName
    }
    const search = {
      email: profile.emails[0].value
    }

    User.findOrCreate(search, newUser, function (err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));