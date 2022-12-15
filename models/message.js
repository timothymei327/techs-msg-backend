const { Schema, default: mongoose } = require('mongoose')

const messageSchema = new Schema(
  {
    is_group_chat: { type: Boolean, default: false },
    body: { type: String, required: true },
    owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    chat: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
    read_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
)

module.exports = messageSchema
