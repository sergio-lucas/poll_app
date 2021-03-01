const FacebookStrategy = require('passport-facebook-token');
const Poll = require('../../../models/poll-model');
const User = require('../../../models/user-model');

module.exports = () => {
  return new FacebookStrategy({
    clientID: 420331932529301,
    clientSecret: "488e0046259c88977724ed529fd85091",
    fbGraphVersion: 'v3.0',
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
      // const poll = new Poll({
      //   name: "test123",
      //   dates: ["123"],
      //   author: user._id
      // })
      // poll.save()
      done(null, user);
    });
  }
)
}