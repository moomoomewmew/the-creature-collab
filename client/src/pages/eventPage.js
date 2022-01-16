import React, { Component } from 'react';
export default class Events extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.city}</h3>
        <h4>{this.props.date}</h4>
        <h4>{this.props.time}</h4>
      </div>
    );
  }
}
