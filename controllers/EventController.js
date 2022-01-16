const { User, Event } = require('../models');

const GetAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.send(events);
  } catch (error) {
    throw error;
  }
};

const GetAllEventsWithAttendees = async (req, res) => {
  try {
    const eventsAndAttendees = await Event.findAll({
      include: [
        {
          model: User,
          as: 'attendees',
          through: { attributes: [] },
          required: true
        }
      ]
    });
    res.send(eventsAndAttendees);
  } catch (error) {
    console.log(error);
  }
};

const GetEventWithAttendees = async (req, res) => {
  try {
    let eventId = parseInt(req.params.id);
    const attendees = await Event.findOne({
      where: { id: 5 },
      include: [
        {
          model: User,
          as: 'attendees',
          through: { attributes: [] }
        }
      ]
    });
    res.send(attendees);
  } catch (error) {
    console.log(error);
  }
};

const GetEventAndOwner = async () => {
  try {
    const eventAndOwner = await Event.findAll({
      include: [
        {
          model: User,
          as: 'owned'
          // through: { attributes: [] }
        }
      ]
    });
    res.send(eventAndOwner);
  } catch (error) {
    console.log(error);
  }
};

const CreateEvent = async (req, res) => {
  try {
    let newEvent = await Event.create(req.body);
    res.send(newEvent);
  } catch (error) {
    throw error;
  }
};

const UpdateEventDetails = async (req, res) => {
  try {
    let eventId = parseInt(req.params.id);
    let updatedEvent = await Event.update(req.body, {
      where: { id: eventId },
      returning: true
    });
    res.send(updatedEvent);
  } catch (error) {
    throw error;
  }
};

const DeleteEvent = async (req, res) => {
  try {
    let eventId = parseInt(req.params.id);
    await Event.destroy({ where: { id: eventId } });
    res.send(`Deleted event with an id of ${eventId}`);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllEvents,
  GetAllEventsWithAttendees,
  CreateEvent,
  UpdateEventDetails,
  DeleteEvent,
  GetEventAndOwner
};
