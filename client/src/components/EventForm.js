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
    console.log(createdEvent);
    // axios.post(`http://localhost:3001/api/events`, createdEvent);
    // // .then((response) => setreturnId(response.data)); // please review. setREturnId is not defined
    // setNewEvent({
    //   name: '',
    //   city: '',
    //   date: '',
    //   time: '',
    //   online: '',
    //   outdoor: '',
    //   address: '',
    //   state: '',
    //   description: '',
    //   picture: ''
    // });
  };
  const getEvents = async () => {
    const response = await axios.get('http://localhost:3001/api/events');
    setEvents(response.data.events);
  };

  useEffect(() => {
    getEvents();
  }, []);
  const handleChange = async (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    console.log(newEvent);
  };
  const handleSubmit = (e) => {
    createNewEvent();
    // getEvents();

    // let eventFormValue = {
    //   name: '',
    //   city: '',
    //   date: '',
    //   time: '',
    //   online: '',
    //   outdoor: '',
    //   address: '',
    //   state: '',
    //   description: '',
    //   picture: ''
    // };
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
          <input
            type="radio"
            id="N/A"
            name={'outdoor'}
            value={''}
            onChange={handleChange}
          />
          <label name="N/A">N/A</label>
        </section>
        <p>For In-Person Events:</p>
        <section className="address-input">
          Street Address:
          <input
            type="text"
            className="event-address-info"
            value={newEvent.address}
            onChange={handleChange}
            name="address"
            id="address"
          ></input>
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
        <section className="event-description-input">
          Description:
          <input
            type="text"
            className="event-description-info"
            value={newEvent.description}
            onChange={(e) => handleChange(e)}
            name="description"
            id="description"
          ></input>
        </section>
        <section className="event-picture-input">
          Upload Pictures!:
          <input
            type="text"
            className="event-picture-info"
            value={newEvent.picture}
            onChange={(e) => handleChange(e)}
            name="picture"
            id="picture"
          ></input>
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
