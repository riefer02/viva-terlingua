import React from 'react';
import { ticketDetails } from '../../content/tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TicketsDetails() {
  return (
    <div className="flex lg:flex-row flex-col mx-auto w-full">
      <div className="tickets-details mx-auto">
        <div className="tickets-details__content">
          {/* <p className="tickets-details__disclaimer notice">
              Thank you everyone for attending the 2022 Original Terlingua
              International Championship Chili Cookoff. We look forward to
              seeing you all next year. The ticket portal will reopen soon.
              Viva Terlingua!
            </p> */}
          <div className="mb-10 lg:mb-20">
            <p>
              Get your tickets for the 2022 Tolbert's Chili Cook Off today
              <br></br>
              Each ticket is priced at $45 per person
            </p>
          </div>
          <div className="relative">
            <h2 className="tickets-details__header">What's Included</h2>
          </div>
          <ul className="tickets-details__list max-w-5xl mx-auto">
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
            <span className="mr-2">Disclaimer:</span> Consumption of too much chili might result
            in a good time!
          </p>
        </div>
      </div>
    </div>
  );
}
