import React from 'react';
import { ticketDetails } from '../content/tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TicketsDetails() {
  return (
    <article className="bg-tertiary-light p-4 lg:p-4 lg:rounded-lg">
      <section className="container mx-auto p-2 px-4 md:p-4 bg-gray-light-1 shadow-md rounded-lg">
        <div className="prose lg:prose-lg mx-auto">
          <header>
            <p>
              The ticket portal for the {new Date().getFullYear()} Terlingua
              Chili Cook Off is{' '}
              <span className="text-primary font-bold">closed</span>. You can
              still purchase your tickets at the front gate when you arrive.
            </p>
            <p>November 1st - 4th, {new Date().getFullYear()}</p>
            <p>
              Tickets are $<span className="text-primary font-bold">53</span>
              /person
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
