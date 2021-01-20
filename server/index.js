const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

const db = require('./db')
const pollRouter = require('./routes/poll-router')
const userRouter = require('./routes/user-router')
const passport = require('./config/passport')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(passport.initialize())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', pollRouter)
app.use('/api', userRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
