const { Schema } = require('mongoose')

const chatSchema = new Schema(
  {
    is_group_chat: { type: Boolean, default: false },
    photo_url: { type: String, default: 'default chat photo' }
    // users: [{ type: }],
    // name: { type: String, trim: true, default: {users.map()}},
    // admins: { },
    // last_message: { type: }
  },
  { timestamps: true }
)

module.exports = chatSchema
