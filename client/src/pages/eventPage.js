import React, { Component } from 'react';
import EventForm from '../components/EventForm';

export default function Events(props) {

  return (
    <div>
      <EventForm />
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
