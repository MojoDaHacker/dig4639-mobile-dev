// https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const fetch = require("node-fetch");
const app = express()
const port = 3001
const simpleJson = {a : 10, b : "Hellow World!"}

app.get('/', (req, res) => res.send(simpleJson))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))