import React, { useState } from 'react';
import axios from 'axios';

const EventForm = (props) => {
  const [newEvent, setNewEvent] = useState({
    name: '',
    city: '',
    date: '',
    time: '',
    online: '',
    outdoor: '',
    address: '',
    state: '',
    description: '',
    picture: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(``, {
      name: newEvent.name,
      city: newEvent.city,
      date: newEvent.date,
      time: newEvent.time,
      online: newEvent.online,
      address: newEvent.address,
      state: newEvent.state,
      descrption: newEvent.description,
      picture: newEvent.picture,
      ownerId: newEvent.ownerId
    });
    let anotherEvent = {
      name: '',
      city: '',
      date: '',
      time: '',
      online: '',
      outdoor: '',
      address: '',
      state: '',
      description: '',
      picture: ''
    };
    setNewEvent(anotherEvent);
    window.location.reload();
  };
  const handleChange = (e) => {
    const newestEvent = { ...newEvent };
    newestEvent[e.target.id] = e.target.value;
    setNewEvent[newestEvent];
  };
  return (
    <div className="add-event">
      <h1 className="event-header">Add Event</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section className="name-input">
          Name:
          <input
            type="text"
            name="name"
            value={newEvent.name}
            onChange={(e) => handleChange(e)}
            id="name"
          />
        </section>
        <section className="event-city-input">
          City:
          <input
            type="text"
            city="city"
            onChange={(e) => handleChange(e)}
            id="city"
          />
        </section>
        <section className="event-date-input">
          Date:
          <input
            type="date"
            value={newEvent.date}
            id="date"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="event-time-input">
          Time:
          <input
            type="time"
            time="time"
            value={newEvent.time}
            onChange={(e) => handleChange(e)}
            id="time"
          />
        </section>
        <section className="event-online-input">
          <select
            type="text"
            className="is-online-event"
            value={newEvent.outdoor}
            onChange={(e) => handleChange(e)}
          >
            <option>Online Event? </option>
            <option value={true}>Online Event</option>
            <option value={false}>In-Person Event</option>
          </select>
        </section>
      </form>
    </div>
  );
};

export default EventForm