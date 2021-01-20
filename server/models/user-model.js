const mongoose = require('mongoose')
const Schema = mongoose.Schema
const findOrCreate = require('mongoose-findorcreate')

const User = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true }, // displayName
    id: { type: Number, required: true}
  }
)

User.plugin(findOrCreate);

module.exports = mongoose.model("user", User)