require('dotenv').config()
require('./DB/officeDB')

const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT || 8000
const employeeRouter = require('./Routes/office-route.js')
const userRouter = require('./Routes/user-route')
const path = require('path')

const passport = require('passport')
require('./config/passport')(passport)

app.use(cors())
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})

app.use(passport.initialize())
app.use('/auth', userRouter)
app.use(
  '/api',
  passport.authenticate('jwt', { session: false }),
  employeeRouter
)

//פונקציה שעוברת לנו לבדוק קשר בין סביבות

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join('client/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  )
}
