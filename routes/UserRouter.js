const Router = require('express').Router();
const controller = require('../controllers/UserController');

Router.get('/', controller.GetAllUsers);
Router.get('/info', controller.GetAllUsersWithAllInfo);
Router.get('/:id', controller.GetUserById);
Router.get('/info/:id', controller.GetUserByIdWithAllInfo);

module.exports = Router;
