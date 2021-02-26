const mongoose = require('mongoose')
const Schema = mongoose.Schema
const findOrCreate = require('mongoose-findorcreate')

const User = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true }
  },
  { timestamps: true },
)

User.plugin(findOrCreate);

module.exports = mongoose.model("User", User)