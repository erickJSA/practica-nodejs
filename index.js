const express = require('express')
const app = express()

const port = process.env.PORT || 3000

require('./src/routes/adminRoutes')(app)

app.listen(port)