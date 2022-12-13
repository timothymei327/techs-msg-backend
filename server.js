const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

//simple testing route
app.get('/', (req, res) => {
  res.send('Running at root route')
})

app.listen(PORT, () => {
  console.log(`Currently running at PORT:`, PORT)
})
