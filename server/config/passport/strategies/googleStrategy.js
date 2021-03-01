const GoogleStrategy = require('passport-token-google2').Strategy;

const User = require('../../../models/user-model');

module.exports = () => {
  return new GoogleStrategy({
    clientID: "286349677291-4rr1ftn907c6tug6s1ni6bkfrql1403g.apps.googleusercontent.com",
    clientSecret: "I35kC2jMdLu5k-hKt4H1xByJ",
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
  )
}