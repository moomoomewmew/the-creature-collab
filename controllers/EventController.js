const { User, Event, EventUser } = require('../models');

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

const GetAllEventsWithAllInfo = async (req, res) => {
  try {
    const eventsAndInfo = await Event.findAll({
      include: [
        {
          model: User,
          as: 'attendees',
          through: { attributes: [] }
        },
        { model: User, as: 'owner' }
      ]
    });
    res.send(eventsAndInfo);
  } catch (error) {
    console.log(error);
  }
};

const GetAllEventsWithOwners = async (req, res) => {
  try {
    const eventsAndOwners = await Event.findAll({
      include: [{ model: User, as: 'owner' }]
    });
    res.send(eventsAndOwners);
  } catch (error) {
    console.log(error);
  }
};

const GetEventByIdWithAttendees = async (req, res) => {
  try {
    let eventId = parseInt(req.params.id);
    const eventAndAttendees = await Event.findOne({
      where: { id: eventId },
      include: [
        {
          model: User,
          as: 'attendees',
          through: { attributes: [] }
        }
      ]
    });
    res.send(eventAndAttendees);
  } catch (error) {
    console.log(error);
  }
};

const GetEventByIdWithAllInfo = async (req, res) => {
  try {
    let eventId = parseInt(req.params.id);
    const eventAndInfo = await Event.findOne({
      where: { id: eventId },
      include: [
        {
          model: User,
          as: 'attendees',
          through: { attributes: [] }
        },
        { model: User, as: 'owner' }
      ]
    });
    res.send(eventAndInfo);
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

const AddEventAttendee = async (req, res) => {
  try {
    let eventAttendee = await EventUser.create(req.body);
    res.send(eventAttendee);
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

const RemoveEventAttendee = async (req, res) => {
  try {
    let eventId = parseInt(req.params.eventId);
    let attendeeId = parseInt(req.params.attendeeId);
    await EventUser.destroy({
      where: { eventId: eventId, attendeeId: attendeeId }
    });
    res.send(
      `Removed user with an id of ${attendeeId} from event with an id of ${eventId}`
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllEvents,
  GetAllEventsWithOwners,
  GetAllEventsWithAttendees,
  GetAllEventsWithAllInfo,
  GetEventByIdWithAttendees,
  GetEventByIdWithAllInfo,
  CreateEvent,
  AddEventAttendee,
  UpdateEventDetails,
  DeleteEvent,
  RemoveEventAttendee
};
