const employees = require('../Model/office-model')

const getAll = async (req, res) => {
  await employees.find((err, result) => {
    if (err) return res.status(404).send({ massage: err })
    res.send(result)
  }).clone();
}

const getById = async (req, res) => {
   await employees.findById(req.params.id , (err, result)=>{
    if(err) return res.status(404).send({massage: err})
    res.send(result);
    }).clone();
}

const postMethod = async (req, res) => {
  await  employees.create(req.body, (err,result)=>{
        if(err) return res.status(404).send({ massage: err })
        res.send(result)
    }).clone();
}

const putMethod = (req, res) => {
    employees.findById(req.params.id, (req, result)=>{
        if(err) return res.status(404).send({massage:err})
        result = req.body;
        res.send(result)
    })
}

const deleteMethod = (req, res) => {}

module.exports = { getAll, getById, postMethod, putMethod, deleteMethod }
