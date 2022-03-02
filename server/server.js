require('dotenv').config()
require('./DB/officeDB')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000;
const employeeRouter = require('./Routes/office-route.js')
const userRouter = require('./Routes/user-route');

const passport = require('passport');
require('./config/passport')(passport);


app.use(cors());
app.use(express.json({extended : true}));
app.use(express.urlencoded({extended : true}))

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})
app.get('/', (req, res) => res.send('haee'))
app.use(passport.initialize());

app.use('/auth', userRouter);
app.use('/api',passport.authenticate('jwt', {session:false}) ,employeeRouter);

