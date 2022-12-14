const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

const { Chat } = require('./models')

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ROUTES
app.get('/', (req, res) => {
  res.send('Running at root route')
})

app.get('/chats', async (req, res) => {
  let chats = await Chat.find({})
  res.send(chats)
})

// app.get('/*', (req, res) => {
//   res.sendFile(`${__dirname}`)
// })

app.listen(PORT, () => {
  console.log(`Currently running at PORT:`, PORT)
})
