import React, { Component, useState, useEffect } from 'react';
import EventForm from '../components/EventForm';
import axios from 'axios';
import { BASE_URL } from '../globals/index';
import EventCard from '../components/EventCard';
import '../styles/events.css';

export default function Events(props) {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await axios.get(`${BASE_URL}/events/info`);
    setEvents(res.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="event-page">
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
      <div className="event-form">
        <EventForm user={props.user} getEvents={getEvents} />
      </div>
    </div>
  );
}
