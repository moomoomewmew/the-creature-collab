const Router = require('express').Router();
const controller = require('../controllers/UserController');

Router.get('/', controller.GetAllUsers);
Router.get('/info', controller.GetAllUsersWithAllInfo);

module.exports = Router;
