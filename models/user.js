const { Schema, default: mongoose } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile_photo_url: { type: String, default: 'default profile photo' }
  },
  { timestamps: true }
)

module.exports = userSchema
