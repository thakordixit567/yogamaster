
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello Developers Dixit 2024')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
