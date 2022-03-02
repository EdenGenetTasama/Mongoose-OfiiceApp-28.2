const users = require('../Model/user-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

debugger
module.exports = {
  register: async (req, res) => {
    console.log(req.body)
    if (users.exists(req.body.email) === true) {
      console.log(req.body.email)
      return res.status(400).json({ massage: `Error, Email exist already` })
    } else {
      bcrypt.hash(req.body.password, 10, async (errHash, hashPassword) => {
        if (errHash) return res.status(404).send({ massage: errHash })
        req.body.password = hashPassword
        await users
          .create(req.body)
          .then(result => res.status(200).json({ massage: 'Add successfully' }))
          .catch(err => res.status(404).send({ massage: err }))
      })
    }
  },
  login: async (req, res) => {
    if (users.exists(req.body.email) == false)
      return res.status(400).json({ message: 'Email not found' })
    try {
      const user = await users.findOne({ email: req.body.email })
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ message: 'Error' })
        if (!isMatch)
          return res.status(400).json({ message: 'Password incorrect' })
        const token = jwt.sign({ user }, process.env.SECRET_KEY, {
          expiresIn: '1h'
        })
        return res.status(200).json({ message: 'Login successful', token })
      })
    } catch (err) {
      return res.status(500).json(err)
    }
  },
  logout: (req, res) => {
    
  }
}
