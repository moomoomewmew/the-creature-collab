const Router = require('express').Router();
const controller = require('../controllers/EventController');

Router.get('/', controller.GetAllEvents);
Router.post('/', controller.CreateEvent);
Router.put('/:id', controller.UpdateEventDetails);
Router.delete('/:id', controller.DeleteEvent);

module.exports = Router;
