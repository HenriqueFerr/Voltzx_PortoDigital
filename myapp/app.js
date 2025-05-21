const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
res.status(200).json(findAllUsers())
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})