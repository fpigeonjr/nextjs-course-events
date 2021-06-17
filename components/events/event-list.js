import React from 'react'
import EventItem from './event-item'

function EventList(props) {
  const { items } = props
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
        />
      ))}
    </ul>
  )
}

export default EventList
