import React from 'react';

const itinerary = [
  {
    date: 'Wednesday, November 3rd',
    events: [
      '7:00pm Victor Trevino and Texas Trouble!',
      '10:00pm Thomas Michael Riley',
    ],
  },
  {
    date: 'Thursday, November 4th',
    events: [
      '7:00pm Los Pinche Gringos',
      '10:00pm Mike and the Magic Moon Pie',
    ],
  },
  {
    date: 'Friday, November 5th',
    events: ['7:00pm Kathryn Legendre', '10:00pm  Petty Theft'],
  },
  {
    date: 'Saturday, November 6th',
    events: ['7:00pm  Jesse Dayton', '10:00pm Gary P. Nunn'],
  },
];

export default function Itinerary() {
  return (
    <ul className="itinerary">
      {itinerary.map((day, index) => (
        <li key={index} className="itinerary__date">
          <h3>{day.date}</h3>
          <ul>
            {day.events.map((event) => (
              <li className="itinerary__event-time">{event}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
