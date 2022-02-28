const employees = require('../Model/office-model')

const getAll = async (req, res) => {
  await employees.find((err, result) => {
    if (err) return res.status(404).send({ massage: err })
    res.send(result)
  }).clone();
}

const getById = async (req, res) => {
   await employees.findById(_id === req.params.id , (err, result)=>{
    if(err) return res.status(404).send({massage: err})
    res.send(result);
    }).clone();
}

const postMethod = (req, res) => {
    employees.create(req.body, (err,result)=>{
        if(err) return res.status(404).send({ massage: err })
        res.send(result)
    }) 
}

const putMethod = (req, res) => {}

const deleteMethod = (req, res) => {}

module.exports = { getAll, getById, postMethod, putMethod, deleteMethod }
