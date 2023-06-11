import React from 'react';

export default function Itinerary({ itinerary }) {
  return (
    <div className="bg-tertiary-light p-4 rounded-lg shadow max-w-sm sm:max-w-3xl mx-auto">
      <ul className="md:grid sm:grid-cols-2 gap-6 md:gap-8">
        {itinerary.map((day, index) => (
          <li key={index} className="md:col-span-1">
            <h3 className="font-bold text-lg md:text-xl my-2 border-b border-primary-light">{day.date}</h3>
            <ul className="space-y-2">
              {day.events.map((event, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-light-1 py-4 px-3 rounded-md shadow"
                >
                  <span className="font-medium text-sm md:text-md">
                    {event.time}
                  </span>
                  <span className="font-light text-sm md:text-md">
                    {event.event}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
