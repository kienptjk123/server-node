const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Du Thanh Duoc!')
})
app.get('/hi', (req, res) => {
  res.send('Hi World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
