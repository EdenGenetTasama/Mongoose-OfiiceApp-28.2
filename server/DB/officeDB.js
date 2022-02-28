const mongoose = require('mongoose')
const STRING_CONNECTION = process.env.officeStringConnection;

mongoose.connect(STRING_CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('mongoDB is connect!'))
  .catch(err => console.log(err))

  module.exports = mongoose.connection;

