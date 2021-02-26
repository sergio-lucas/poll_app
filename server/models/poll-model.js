const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Poll = new Schema(
    {
        name: { type: String, required: true },
        dates: { type: [String], required: true },
        author: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Poll', Poll)
