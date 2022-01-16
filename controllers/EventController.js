const { User, Event, sequelize } = require('../models');

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

module.exports = {
  GetAllEvents,
  CreateEvent
};
