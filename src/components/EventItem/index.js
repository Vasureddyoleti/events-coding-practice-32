// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, changeActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickChangeId = () => {
    changeActiveEventId(id)
  }

  const imageClassName = isActive ? 'active-event-image' : 'event-image'

  return (
    <li className="event-item">
      <button type="button" onClick={onClickChangeId} className="event-button">
        <img src={imageUrl} alt="event" className={imageClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
