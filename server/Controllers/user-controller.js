const users = require('../Model/user-model')
const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    if (users.exists(req.body.email)== true) return res.status(400).json({ massage: `Error, Email exist already` })
    bcrypt.hash(req.body.password, 10, async (errHash, hashPassword) => {
      if (errHash) return res.status(404).send({ massage: errHash })
      req.body.password = hashPassword
      await users
        .create(req.body)
        .then(result => res.status(200).json({ massage: 'Add successfully' }))
        .catch(err => res.status(404).send({ massage: err }))
    })
  }
}