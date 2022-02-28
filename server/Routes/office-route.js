const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/office-controller.js')
//get:

router.get('/', controllers.getAll);

router.get('/:id',controllers.getById);

//post

router.post('/',controllers.postMethod);

//put:

router.put('/:id',controllers.putMethod);

//delete
router.delete('/:id',controllers.deleteMethod);

module.exports = router;
