import React from 'react';
import { ticketDetails } from '../../content/tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TicketsDetails() {
  return (
    <div
      className="flex lg:flex-row flex-col mx-auto max-w-6xl w-full"
      style={{ marginBottom: '25px' }}
    >
      <div className="tickets-details mx-auto">
        <div className="tickets-details__content">
          {/* <p className="tickets-details__disclaimer notice">
              Thank you everyone for attending the 2022 Original Terlingua
              International Championship Chili Cookoff. We look forward to
              seeing you all next year. The ticket portal will reopen soon.
              Viva Terlingua!
            </p> */}
          <div className="tickets-details__banner mb-10 lg:mb-12">
            <p>
              Get your tickets for the 2022 Terlingua Chili Cook Off <br></br>{' '}
              Tickets are priced at $45 per person
            </p>
          </div>
          <div className="relative">
            <h2 className="tickets-details__header">What's Included</h2>
          </div>
          <ul className="tickets-details__list mx-auto">
            {ticketDetails.map((detail, index) => (
              <li key={index} className="tickets-details__item">
                <FontAwesomeIcon
                  icon="pepper-hot"
                  className="tickets-details__item-caret text-primary"
                />
                {detail}
              </li>
            ))}
          </ul>
          <p className="tickets-details__disclaimer flex flex-col lg:flex-row items-center">
            <span className="mb-5 lg:mb-0 lg:mr-5">Disclaimer:</span>{' '}
            Consumption of too much chili might result in a good time!
          </p>
        </div>
      </div>
    </div>
  );
}
