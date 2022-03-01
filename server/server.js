require('dotenv').config();
require('./DB/officeDB');
const express = require('express')
const app = express();
const cors = require('cors');
const port = 6000;
const router = require('./Routes/office-route.js');
const userRouter = require('./Routes/user-route')
app.use(express.json());
app.use(cors());
app.use('/' , userRouter)
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})
