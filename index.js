const express = require('express')
const app = express()
//env variable
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.static('public'))

const route = require('./routes/client/index.route')
app.set('views', './views') // specify the views directory
app.set('view engine', 'pug') // register the template engine
route(app)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})