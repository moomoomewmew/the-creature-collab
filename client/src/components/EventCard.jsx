import axios from "axios"
import { BASE_URL } from "../globals/index"

export default function EventCard(props) {

  const attending = props.event.attendees.find(({ id }) => id === props.user.id)

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

  const handleClick = (e) => {
    e.preventDefault();
    if(!attending) {
      attend()
    } else {
      unattend()
    }
  } 

// const dateString = props.event.date

// const formatDate = (dateString) => {
//   const options = { year: "numeric", month: "long", day: "numeric" }
//   return new Date(dateString).toLocaleDateString(undefined, options)
// }

// formatDate(dateString)

  return (
    <div className="event-card">
      <h3>{props.event.name}</h3>
      <h4>
        {props.event.date}
        {/* {dateString} */}
      </h4>
      <p>{props.event.time}</p>
      <h5>{props.event.description}</h5>
      <h5>{props.event.online ? "Online" : "In-Person"}</h5>
      <h5>{props.event.online ? `URL: ${props.event.address}` : `Location: ${props.event.address}, ${props.event.city}, ${props.event.state}`}</h5>
      <h5>Event Owner: </h5><img src={props.event.owner.profilePic} alt={props.event.owner.userName} />
      <button onClick={handleClick}>{attending ? "You are attending this Event" : "Click to Attend"}</button>
    </div>
  )
}