import React, { Component, useState, useEffect } from 'react';
import EventForm from '../components/EventForm';
import axios from 'axios';
import { BASE_URL } from '../globals/index';
import EventCard from '../components/EventCard';
import '../styles/zevents.css';

export default function Events(props) {
  const [events, setEvents] = useState([]);
  // const [userEvents, setUserEvents] = useState([]);

  const getEvents = async () => {
    const res = await axios.get(`${BASE_URL}/events/info`);
    setEvents(res.data);
  };

  // const userEvents = events.find(({ ownerId }) => ownerId === props.user.id);

  const userEvents = events.filter((event) => event.ownerId === props.user.id);

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
              <EventCard
                event={event}
                user={props.user}
                getEvents={getEvents}
              />
            </div>
          );
        })}
      </div>
      <div className="event-form">
        <EventForm user={props.user} getEvents={getEvents} />
      </div>
      <div>
        <h1>Your Events</h1>
        {userEvents.map((event) => {
          return (
            <div key={event.id}>
              <EventCard
                event={event}
                user={props.user}
                getEvents={getEvents}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
