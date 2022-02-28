const employees = require('../Model/office-model')

const getAll = async (req, res) => {
  await employees
    .find((err, result) => {
      if (err) return res.status(404).send({ massage: err })
      res.send(result)
    })
    .clone()
}

const getById = async (req, res) => {
  await employees
    .findById(req.params.id, (err, result) => {
      if (err) return res.status(404).send({ massage: err })
      res.send(result)
    })
    .clone()
}

const postMethod = async (req, res) => {
  await employees
    .create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(404).send({ massage: err }))
}

const putMethod = (req, res) => {
  employees
    .findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => console.log(err))
}

const deleteMethod = (req, res) => {
  employees
    .findByIdAndDelete(req.params.id, req.body)
    .then(result =>
      res
        .send(`Delete ${req.params.id}`)
        .catch(err => res.status(404).send({ massage: err }))
    )
}

module.exports = { getAll, getById, postMethod, putMethod, deleteMethod }
