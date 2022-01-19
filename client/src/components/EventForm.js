import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EventForm(props) {
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
    ownerId: 1
  });
  const [displayedMessage, setDisplayedMessage] = useState('');

  const getEvents = async () => {
    const response = await axios.get('http://localhost:3001/api/events');
    setEvents(response.data.events);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const createNewEvent = async () => {
    const createdEvent = {
      ...newEvent
    };

    await axios
      .post(`http://localhost:3001/api/events`, createdEvent)
      // // .then((response) => setreturnId(response.data)); // please review. setREturnId is not defined
      .then(() => {
        getEvents();
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

    // getEvents();

    // setNewEvent(eventFormValue);
    // window.location.reload();
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
        <section className="event-date-input">
          Date:
          <input
            type="date"
            value={newEvent.date}
            name={'date'}
            label={'date of event'}
            onChange={handleChange}
          />
        </section>
        <section className="event-time-input">
          Time:
          <input
            type="time"
            name={'time'}
            value={newEvent.time}
            onChange={handleChange}
            label={'time of event'}
          />
        </section>
        <section className="event-description-input">
          Description:
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
          Event Picture URL:
          <input
            type="url"
            className="event-picture-info"
            value={newEvent.picture}
            onChange={(e) => handleChange(e)}
            name="picture"
            id="picture"
          ></input>
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
          Street Address or URL:
          <input
            type="text"
            className="event-address-info"
            value={newEvent.address}
            onChange={handleChange}
            name="address"
            id="address"
          ></input>
        </section>
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
          City:
          <input
            type="text"
            name={'city'}
            value={newEvent.city}
            onChange={(e) => handleChange(e)}
            id="city"
          />
        </section>
        <section className="event-state-address">
          State:
          <input
            type="text"
            className="event-state-info"
            value={newEvent.state}
            onChange={(e) => handleChange(e)}
            name="state"
            id="state"
          ></input>
        </section>

        <p>{displayedMessage}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
