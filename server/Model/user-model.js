const mongoose = require('mongoose')
const schema = mongoose.Schema

const Users = new schema(
  {
    firstName: { type: string, required },
    lastName: { type: string, required },
    email: { type: string, required },
    password: { type: string, required },
    lastLogin: { type: Date, default: Date.now },
    isConnect: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
)

module.exports= mongoose.model('User',Users );
