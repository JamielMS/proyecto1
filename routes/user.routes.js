const userController =  require('../controllers/user.controller');
const express = require('express');

const router = express.Router();

router
    .route('/')
    .get(userController.findAll)
    .post(userController.create);

router
    .route('/:id')
    .get(userController.findOne) 
    .patch(userController.update)
    .delete(userController.delete)

module.exports = router;