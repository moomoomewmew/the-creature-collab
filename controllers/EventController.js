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

// const GetEventAndOwner = async () => {
//   try {
//     const eventAndOwner = await Event.findAll({
//       include: [
//         {
//           model: User,
//           as: 'owned'
//           // through: { attributes: [] }
//         }
//       ]
//     });
//     res.send(eventAndOwner);
//   } catch (error) {
//     console.log(error);
//   }
// };

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
  GetAllEventsWithAttendees,
  GetEventByIdWithAttendees,
  CreateEvent,
  AddEventAttendee,
  UpdateEventDetails,
  DeleteEvent,
  RemoveEventAttendee
  // GetEventAndOwner
};
