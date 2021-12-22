const express = require('express')
const app = express()
const router = require('./src/modules/routes')
const cors = require('cors')
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, console.log(PORT))