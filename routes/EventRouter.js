const Router = require('express').Router();
const controller = require('../controllers/EventController');

Router.get('/', controller.GetAllEvents);
Router.get('/attendees', controller.GetAllEventsWithAttendees);
Router.get('/attendees/:id', controller.GetEventByIdWithAttendees);
Router.get('/owners', controller.GetAllEventsWithOwners);
Router.get('/info', controller.GetAllEventsWithAllInfo);
Router.get('/info/:id', controller.GetEventByIdWithAllInfo);
Router.post('/', controller.CreateEvent);
Router.post('/attendees', controller.AddEventAttendee);
Router.put('/:id', controller.UpdateEventDetails);
Router.delete('/:id', controller.DeleteEvent);
Router.delete(
  '/attendees/:eventId/:attendeeId',
  controller.RemoveEventAttendee
);

module.exports = Router;
