// server/index.js
// https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const fetch = require("node-fetch");
<<<<<<< HEAD
const app = express()
const port = 3001
const simpleJson = {a : 10, b : "Hellow World!"}

app.get('/', (req, res) => res.send(simpleJson))
=======
const cors = require('cors')
const app = express()
const port = 3001
const simpleJson = {a: 10, 
  b: "Hello DIG4639!", 
  list:[
    {title:"Tonight",
    content: "Watching Netflix"},
    {title:"Tomorrow",
    content: "Completing Homework"}
  ]
}
app.use(cors())
app.get('/', async (req, res) => {
  res.send(simpleJson)
})
>>>>>>> f9342ce584bfe62e6cd3bf5909924b06d4bdd276

app.listen(port, () => console.log(`Example app listening on port ${port}!`))