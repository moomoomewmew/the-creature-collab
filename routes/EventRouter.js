const Router = require('express').Router();
const controller = require('../controllers/EventController');

Router.get('/', controller.GetAllEvents);
Router.get('/attendees', controller.GetAllEventsWithAttendees);
Router.get('/attendees/:id', controller.GetEventByIdWithAttendees);
// Router.get('/owner', controller.GetEventAndOwner);
Router.post('/', controller.CreateEvent);
Router.post('/attendees', controller.AddEventAttendee);
Router.put('/:id', controller.UpdateEventDetails);
Router.delete('/:id', controller.DeleteEvent);

module.exports = Router;
