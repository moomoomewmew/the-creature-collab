import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals/index';

export default function EventEdit(props) {
  const [inputValue, setInputValue] = useState(props.event)
  const [displayedMessage, setDisplayedMessage] = useState('')

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const updateEvent = async () => {
    await axios
      .put(`${BASE_URL}/events/${props.event.id}`, inputValue)
      .then(() => {
        alert(`Your event, "${props.event.name}," has been updated.`)
        props.getEvents()
        props.setClicked(false)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.name) {
      setDisplayedMessage('Event must have a name');
    } else if (!inputValue.date) {
      setDisplayedMessage('Event must have a date');
    } else if (!inputValue.time) {
      setDisplayedMessage('Event must have a time');
    } else if (!inputValue.description) {
      setDisplayedMessage('Event must have a description');
    } else if (!inputValue.address) {
      setDisplayedMessage('Please specify a street address or URL');
    } else {
      updateEvent();
    }
  };
  
  return (
    <div className="event-card">
      <h1 className="event-header">Add Event</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section className="name">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={(e) => handleChange(e)}
            id="name"
          />
        </section>
        <section className="event-date-input">
          <label htmlFor="date">Date:</label>
          <br />
          <input
            type="date"
            value={inputValue.date}
            placeholder={inputValue.date}
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
            value={inputValue.time}
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
            value={inputValue.description}
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
            value={inputValue.picture}
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
            value={inputValue.address}
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
              value={inputValue.city}
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
              value={inputValue.state}
              onChange={(e) => handleChange(e)}
              name="state"
              id="state"
            />
          </section>
        </div>

        <p>{displayedMessage}</p>
        <button type="submit">Submit</button>
        <button onClick={()=>props.setClicked(false)}>Cancel</button>
      </form>
    </div>
  );
}
