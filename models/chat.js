const { Schema, default: mongoose } = require('mongoose')

const chatSchema = new Schema(
  {
    is_group_chat: { type: Boolean, default: false },
    chat_photo_url: { type: String, default: 'default chat photo' },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    admins: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: {
      type: String,
      trim: true
      // default: users.map((user) => {
      //   user.username
      // })
    },
    last_message: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }
  },
  { timestamps: true }
)

module.exports = chatSchema
