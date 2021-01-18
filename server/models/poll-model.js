const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Poll = new Schema(
    {
        name: { type: String, required: true },
        dates: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('polls', Poll)
