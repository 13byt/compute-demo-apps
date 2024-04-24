const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.IAGON_COMPUTE_PORT, () => {
  console.log(`Example app listening on port ${process.env.IAGON_COMPUTE_PORT}`)
})
