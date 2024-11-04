const express = require('express')
const cors = require('cors')
const router = require('./router.js')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.listen(8000)