const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`Hello World! (by ${process.env.MESSAGE_BY}) `)
})

app.listen(process.env.IAGON_COMPUTE_PORT, process.env.LISTEN_HOST, () => {
  console.log(`Example app listening on port ${process.env.IAGON_COMPUTE_PORT} on host ${process.env.LISTEN_HOST}`)
})
