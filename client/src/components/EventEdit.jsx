import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals/index';
import { CheckSession } from '../services/Auth';

export default function EventEdit(props) {
  const [user, setUser] = useState();
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    city: '',
    date: '',
    time: '',
    online: null,
    outdoor: null,
    address: '',
    state: '',
    description: '',
    picture: '',
    ownerId: props.user.id
  });
  const [displayedMessage, setDisplayedMessage] = useState('');

  const getEvents = async () => {
    const response = await axios.get(`${BASE_URL}/events`);
    setEvents(response.data.events);
  };

  useEffect(() => {
    getEvents();
    CheckSession();
    setUser(props.user);
  }, []);

  const createNewEvent = async () => {
    const createdEvent = {
      ...newEvent
    };
    await axios.post(`${BASE_URL}/events`, createdEvent).then(() => {
      props.getEvents();
      setDisplayedMessage('Your event has been added!');
      setNewEvent({
        name: '',
        city: '',
        date: '',
        time: '',
        online: null,
        outdoor: null,
        address: '',
        state: '',
        description: '',
        picture: ''
      });
    });
  };

  const handleChange = async (e) => {
    setDisplayedMessage('');
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEvent.name) {
      setDisplayedMessage('Event must have a name');
    } else if (!newEvent.date) {
      setDisplayedMessage('Event must have a date');
    } else if (!newEvent.time) {
      setDisplayedMessage('Event must have a time');
    } else if (!newEvent.description) {
      setDisplayedMessage('Event must have a description');
    } else if (!newEvent.online) {
      setDisplayedMessage('Please choose online or in-person');
    } else if (!newEvent.address) {
      setDisplayedMessage('Please specify a street address or URL');
    } else {
      createNewEvent();
    }
  };
  return (
    <div className="add-event">
      <h1 className="event-header">Add Event</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section className="name">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={newEvent.name}
            onChange={(e) => handleChange(e)}
            id="name"
          />
        </section>
        <section className="event-date-input">
          <label htmlFor="date">Date:</label>
          <br />
          <input
            type="date"
            value={newEvent.date}
            name={'date'}
            label={'date of event'}
            onChange={handleChange}
          />
        </section>
        <section className="event-time-input">
          <label htmlFor="time">Time:</label>
          <br />
          <input
            type="time"
            name={'time'}
            value={newEvent.time}
            onChange={handleChange}
            label={'time of event'}
          />
        </section>
        <section className="event-description-input">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            type="text"
            className="event-description-info"
            value={newEvent.description}
            onChange={(e) => handleChange(e)}
            name="description"
            id="description"
          />
        </section>
        <section className="event-picture-input">
          <label htmlFor="picture">Event Picture URL:</label>
          <br />
          <input
            type="url"
            className="event-picture-info"
            value={newEvent.picture}
            onChange={(e) => handleChange(e)}
            name="picture"
            id="picture"
          />
        </section>

        <section className="event-online-input">
          <p>Online Or In-Person?</p>
          <input
            type="radio"
            id="online"
            name={'online'}
            value={true}
            onChange={handleChange}
          />
          <label name="onlineChoice">Online</label>
          <input
            type="radio"
            id="inPerson"
            name={'online'}
            value={false}
            onChange={handleChange}
          />
          <label name="inPersonChoice">In-Person</label>
        </section>
        <section className="address-input">
          <p>Please input a street address for in-person or URL for online: </p>
          <label htmlFor="address">Street Address or URL:</label>
          <br />
          <input
            type="text"
            className="event-address-info"
            value={newEvent.address}
            onChange={handleChange}
            name="address"
            id="address"
          />
        </section>

        <div>
          <section className="event-outdoor-input">
            <p>Indoor Or Outdoor?</p>
            <input
              type="radio"
              id="indoor"
              name={'outdoor'}
              value={false}
              onChange={handleChange}
            />
            <label name="indoorChoice">Indoor</label>
            <input
              type="radio"
              id="outdoor"
              name={'outdoor'}
              value={true}
              onChange={handleChange}
            />
            <label name="outdoorChoice">Outdoor</label>
          </section>
          <p>For In-Person Events:</p>
          <section className="event-city-input">
            <label htmlFor="city">City:</label>
            <br />
            <input
              type="text"
              name={'city'}
              value={newEvent.city}
              onChange={(e) => handleChange(e)}
              id="city"
            />
          </section>
          <section className="event-state-address">
            <label htmlFor="state">State:</label>
            <br />
            <input
              type="text"
              className="event-state-info"
              value={newEvent.state}
              onChange={(e) => handleChange(e)}
              name="state"
              id="state"
            />
          </section>
        </div>

        <p>{displayedMessage}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
