const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL || 'poll-db:27017';

mongoose
    .connect(`mongodb://${mongoUrl}/pool_app`, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db
