// app.js
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/api', (req, res) => res.json({ message: 'Hello World!' }))

const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))