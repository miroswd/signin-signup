const { Router } = require('express');

const { userController } = require('../controllers');

const routes = Router();

routes.post('/user', userController.createUser);

module.exports = routes;
