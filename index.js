const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/client/index.route')
app.set('views', './views') // specify the views directory
app.set('view engine', 'pug') // register the template engine

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})