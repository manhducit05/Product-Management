const express = require('express')
const app = express()

// app local varaiable - biến tổng quan, dùng dc trong tất cả file pug
const systemConfix = require('./config/system')
app.locals.prefixAdmin = systemConfix.prefixAdmin
//env variable
require('dotenv').config()
const PORT = process.env.PORT


//define static files
app.use(express.static('public'))


//connect to db
const db = require('./config/db')
db.connect()

const route = require('./routes/client/index.route')
const routeAdmin = require('./routes/admin/index.route')
app.set('views', './views') // specify the views directory
app.set('view engine', 'pug') // register the template engine
routeAdmin(app)
route(app)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})