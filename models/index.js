const mongoose = require('mongoose')
const chatSchema = require('./chat')

const Chat = mongoose.model('Chat', chatSchema)

module.exports = {
  Chat
}
