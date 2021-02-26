const express = require('express')
const session = require("express-session")
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

const db = require('./db')
const pollRouter = require('./routes/poll-router')
const userRouter = require('./routes/user-router')
require('./config/passport')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
// enable cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption))
app.use(session({ secret: "cats" }))
app.use(bodyParser.json())

app.use(passport.initialize())
app.use(passport.session());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/profile', isLoggedIn, (req, res) => {
    res.json({login: true})
})

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.json({login: false})
}

app.use('/api', pollRouter)
app.use('/api', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
