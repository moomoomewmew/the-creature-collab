import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EventForm(props) {
  const [events, setEvents] = useState([]);
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

  const createNewEvent = (e) => {
    e.preventDefault();
    const createdEvent = {
      ...newEvent
    };
    axios
      .post(`hhtp://localhost/api/(something here)`, createdEvent)
      // .then((response) => setreturnId(response.data)); /// please review. setREturnId is not defined
    setNewEvent({
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
  };
  const getEvents = async () => {
    const response = await axios.get('http://localhost:3001/api/bleh');
    setEvents(response.data.events);
  };

  useEffect(() => {
    getEvents();
  }, []);
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    createNewEvent();
    getEvents();

    let eventFormValue = {
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
    setNewEvent(eventFormValue);
    window.location.reload();
  };
  return (
    <div className="add-event">
      <h1 className="event-header">Add Event</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section className="name">
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
            value={newEvent.online}
            onChange={(e) => handleChange(e)}
          >
            <option>Online Event? </option>
            <option value={true}>Online Event</option>
            <option value={false}>In-Person Event</option>
          </select>
        </section>
        <section className="event-outdoor-input">
          <select
            type="text"
            className="is-outdoor-event"
            value={newEvent.outdoor}
            onChange={(e) => handleChange(e)}
          >
            <option>Outdoors?</option>
            <option value={true}>Outdoor Event</option>
            <option value={false}>Indoor Event</option>
          </select>
        </section>
        <section className="address-input">
          Street Address
          <input
            type="text"
            className="event-address-info"
            value={newEvent.address}
            onChange={(e) => handleChange(e)}
          ></input>
        </section>
        <section className="event-state-address">
          State
          <input
            type="text"
            className="event-state-info"
            value={newEvent.state}
            onChange={(e) => handleChange(e)}
          ></input>
        </section>
        <section className="event-description-input">
          <input
            type="text"
            className="event-description-info"
            value={newEvent.description}
            onChange={(e) => handleChange(e)}
          ></input>
        </section>
        <section className="event-picture-input">
          <input
            type="text"
            className="event-picture-info"
            value={newEvent.picture}
            onChange={(e) => handleChange(e)}
          ></input>
        </section>
      </form>

      <button type="submit">Submit</button>
    </div>
  );
};
