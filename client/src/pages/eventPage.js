import React, { Component, useState, useEffect } from 'react';
import EventForm from '../components/EventForm';
import axios from 'axios';
import { BASE_URL } from '../globals/index';
import EventCard from '../components/EventCard';
import '../styles/events.css';

export default function Events(props) {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await axios.get(`${BASE_URL}/events`);
    setEvents(res.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="event-page">
      <div className="event-form">
        <EventForm />
      </div>
      <div className="events">
        <h1>Events</h1>
        {events.map((event) => {
          return (
            <div key={event.id}>
              <EventCard event={event} />
            </div>
          );
        })}
      </div>
      <h2>{props.name}</h2>
      <h3>{props.city}</h3>
      <h4>{props.date}</h4>
      <h4>{props.time}</h4>
      <h4>{props.address}</h4>
      <h4>{props.state}</h4>
      <h4>{props.description}</h4>
      <h4>{props.picture}</h4>
    </div>
  );
}
