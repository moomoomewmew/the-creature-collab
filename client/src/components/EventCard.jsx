import axios from "axios"
import { BASE_URL } from "../globals/index"
import { useState } from "react"
import EventEdit from "./EventEdit"

export default function EventCard(props) {
  const [clicked, setClicked] = useState(false)

  const attending = props.event.attendees.find(({ id }) => id === props.user.id)
  
  const owned = props.event.ownerId === props.user.id

  const attend = async () => {
    await axios
      .post(`${BASE_URL}/events/attendees`, {
        eventId: props.event.id,
        attendeeId: props.user.id
      })
      .then(() => {
        props.getEvents()
      })
    }

  const unattend = async () => {
    await axios
      .delete(`${BASE_URL}/events/attendees/${props.event.id}/${props.user.id}`)
      .then(() => {
        props.getEvents()
      })
  }

  const handleAttendingClick = (e) => {
    e.preventDefault();
    if(!attending) {
      attend()
    } else {
      unattend()
    }
  } 

  const handleEditClick = (e) => {
    e.preventDefault();
    setClicked(true)
    console.log(clicked)
  }

  const deleteEvent = async () => {
    await axios
      .delete(`${BASE_URL}/events/${props.event.id}`)
      .then(() => {
        props.getEvents()
        alert(`Your event, "${props.event.name}," has been deleted.`)
      })
  }

  const confirmDeletion = (e) => {
    e.preventDefault();
    const confirmDeletion = window.confirm(`Are you sure you want to delete ${props.event.name}?`)
    if (confirmDeletion) {
      deleteEvent()
    }
  }

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const toRegularTime = (militaryTime) => {
  const [hours, minutes] = militaryTime.split(':');
  return `${(hours > 12) ? hours - 12 : hours}:${minutes} ${(hours >= 12) ? 'PM' : 'AM'}`;
}

if (clicked) {
  return (
    <div>
      <EventEdit event={props.event} getEvents={props.getEvents} clicked={clicked} setClicked={setClicked}/>
    </div>
  )
}
  return (
    <div className="event-card">
      <p>{props.event.name}</p>
      <img className="event-pic" src={props.event.picture} alt={props.event.name}/>
      <h4>
        {formatDate(props.event.date)}
      </h4>
      <p>{toRegularTime(props.event.time)}</p>
      <h4>{props.event.description}</h4>
      <h4>{props.event.online ? "Online" : "In-Person"}</h4>
      <h4>{props.event.online ? `URL: ${props.event.address}` : `Location: ${props.event.address}, ${props.event.city}, ${props.event.state}`}</h4>
      <h4>Event Owner: {props.event.owner.userName}</h4>
      <img className="owner-pic" src={props.event.owner.profilePic} alt={props.event.owner.userName} />
      <button onClick={handleAttendingClick} className="attending-button">{attending ? "You are attending this Event" : "Click to Attend"}</button>
      {owned ? 
        <div>
          <button onClick={handleEditClick} className="edit-button">Edit Your Event</button>
          <button onClick={confirmDeletion} className="delete-button">Delete Your Event</button>
        </div>
      : null}
    </div>
  )
}