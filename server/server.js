require('dotenv').config()
require('./DB/officeDB')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000;
const router = require('./Routes/office-route.js')
const userRouter = require('./Routes/user-route')

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})
app.get('/', (req, res) => res.send('haee'))

app.use('/auth', userRouter)
app.use('/api', router)
