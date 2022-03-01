const users = require('../Model/user-model')
const bcrypt = require('bcrypt')

module.exports = {
  register: async (req, res) => {
    if (users.exists(req.body.email))
      return res.status(404).send({ massage: 'Error, Email exist already' })
        bcrypt.hash(req.body.password, 10, async (errHash, hashPassword) => {
    if (errHash) return res.status(404).send({ massage: errHash })
      req.body.password = hashPassword
        })
    await users
      .create(req.body)
      .then(result => res.status(200).json({ massage: 'Add successfully' }))
      .catch(err => res.status(404).send({ massage: err }))
  }
}
