import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../globals/index"

export default function EventCard(props) {
  return (
    <div className="event-card">
      <h3>{props.event.name}</h3>
      <h4>{props.event.date}</h4>
      <h4>{props.event.time}</h4>
    </div>
  )
}