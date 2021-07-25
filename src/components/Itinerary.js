import React from "react";

export default function Itinerary() {
  return (
    <ul className="itinerary">
      <li className="itinerary__date">
        <h3>Wednesday, November 3rd</h3>
        <ul>
          <li className="itinerary__event-time">
            7:00pm Victor Trevino and Texas Trouble!
          </li>
          <li className="itinerary__event-time">
            10:00pm Thomas Michael Riley
          </li>
        </ul>
      </li>
      <li className="itinerary__date">
        <h3> Thursday, November 4th</h3>
        <ul>
          <li className="itinerary__event-time">7:00pm Los Pinche Gringos</li>
          <li className="itinerary__event-time">
            10:00pm Mike and the Moonpies
          </li>
        </ul>
      </li>
      <li className="itinerary__date">
        <h3> Friday, November 5th</h3>
        <ul className="itinerary__event-time">
          <li className="itinerary__event-time">7:00pm Kathryn Legendre</li>
          <li className="itinerary__event-time">10:00pm Petty Theft</li>
        </ul>
      </li>
      <li className="itinerary__date">
        <h3> Saturday, November 6th</h3>
        <ul>
          <li className="itinerary__event-time">7:00pm Jesse Dayton</li>
          <li className="itinerary__event-time">10:00pm Gary P. Nunn</li>
        </ul>
      </li>
    </ul>
  );
}
