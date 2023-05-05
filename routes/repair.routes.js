const express = require('express');

const repairController = require('../controllers/repair.controller');

const routerRepair = express.Router();

routerRepair
  .route('/')
  .get(repairController.allRepair)
  .post(repairController.create);

routerRepair
  .route('/:id')
  .get(repairController.findOne)
  .patch(repairController.update)
  .delete(repairController.delete);

module.exports = routerRepair;