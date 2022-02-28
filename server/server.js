require('dotenv').config();
require('./DB/officeDB');
const express = require('express')
const app = express();
const cors = require('cors');
const port = 6000;
const router = require('./Routes/office-route.js');

app.use(cors());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})
