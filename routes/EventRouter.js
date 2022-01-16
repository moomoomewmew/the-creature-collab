const Router = require('express').Router();
const controller = require('../controllers/EventController');

Router.get('/', controller.GetAllEvents);
Router.post('/', controller.CreateEvent);
Router.put('/:id', controller.UpdateEventDetails);

module.exports = Router;
