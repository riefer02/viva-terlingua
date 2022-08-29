import React from 'react';

export default function Itinerary({ itinerary }) {
  return (
    <ul className="itinerary">
      {itinerary.map((day, index) => (
        <li key={index} className="itinerary__date">
          <h3>{day.date}</h3>
          <ul className="">
            {day.events.map((event, index) => (
              <li key={index} className="itinerary__item">
                <span className="itinerary__event-time">{event.time}</span>
                <span className="itinerary__event-name">{event.event}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
