const mongoose = require('mongoose')
const chatSchema = require('./chat')
const messageSchema = require('./message')
const userSchema = require('./user')

const Chat = mongoose.model('Chat', chatSchema)
const Message = mongoose.model('Message', messageSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Chat,
  Message,
  User
}
