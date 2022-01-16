const { User, Event } = require('../models');

const GetAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.send(events);
  } catch (error) {
    throw error;
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

module.exports = {
  GetAllEvents,
  CreateEvent,
  UpdateEventDetails
};
