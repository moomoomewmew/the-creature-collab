export default function EventCard(props) {

  return (
    <div className="event-card">
      <h3>{props.event.name}</h3>
      <h4>
        {props.event.date}
      </h4>
      <p>{props.event.time}</p>
      <h5>{props.event.description}</h5>
      <h5>{props.event.online ? "Online" : "In-Person"}</h5>
      <h5>{props.event.online ? `URL: ${props.event.address}` : `Location: ${props.event.address}, ${props.event.city}, ${props.event.state}`}</h5>
    </div>
  )
}