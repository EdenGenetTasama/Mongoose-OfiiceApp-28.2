const express = require('express');
const router = express.Router();
const controllersEmployee = require('../Controllers/office-controller.js');

//get:

router.get('/', controllersEmployee.getAll);

router.get('/:id',controllersEmployee.getById);

//post

router.post('/',controllersEmployee.postMethod);

//put:

router.put('/:id',controllersEmployee.putMethod);

//delete
router.delete('/:id',controllersEmployee.deleteMethod);

module.exports = router;
