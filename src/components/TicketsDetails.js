import React from 'react';
import { ticketDetails } from '../content/tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CURRENT_YEAR } from '../constants';

export default function TicketsDetails() {
  return (
    <article className="bg-tertiary-light p-4 lg:p-4 lg:rounded-lg">
      <section className="container mx-auto p-2 px-4 md:p-4 bg-gray-light-1 shadow-md rounded-lg">
        <div className="prose lg:prose-lg mx-auto">
          <header className="-mb-6">
            <p>The 2024 Ticket portal is now open!</p>
            <p>Oct 30th - Nov 2nd, {CURRENT_YEAR}</p>
            <p>
              Price: <span className="text-primary">$53</span> per Chilihead!
            </p>
          </header>

          <section>
            <h2>What's Included</h2>
            <ul>
              {ticketDetails.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <FontAwesomeIcon
                    icon="pepper-hot"
                    className="mr-3 md:mr-2 text-primary"
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Physical Address:</h2>
            <p>22970 FM 170 Terlingua, TX 79852</p>
          </section>

          <section>
            <h2>Disclaimer:</h2>
            <p>Consumption of too much chili might result in a good time!</p>
          </section>
        </div>
      </section>
    </article>
  );
}
