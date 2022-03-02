const mongoose = require('mongoose')
const schema = mongoose.Schema

const Users = new schema(
  {
    firstName: { type: String, require:true },
    lastName: { type: String, require:true },
    email: { type: String, require:true , unique:true},
    password: { type: String, require:true },
    lastLogin: { type: Date, default: Date.now },
    isConnect: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
)

module.exports= mongoose.model('User',Users );
