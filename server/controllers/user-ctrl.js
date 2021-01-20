const User = require('../models/user-model')


findOrCreateUser = (req, res) => {

  User.findOrCreate({ _id: req.params.id }, function(err, user) {
    if (err) { return done(err); }
    done(null, user);
  })
}