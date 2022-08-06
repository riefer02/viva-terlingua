import React from 'react';
import { ticketDetails } from '../../content/tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TicketsDetails() {
  return (
    <div>
      <div
        className="flex lg:flex-row flex-col mx-auto max-w-5xl w-full"
        style={{ marginBottom: '25px' }}
      >
        <div className="tickets-details">
          <div className="tickets-details__content">
            {/* <p className="tickets-details__disclaimer notice">
              Thank you everyone for attending the 2022 Original Terlingua
              International Championship Chili Cookoff. We look forward to
              seeing you all next year. The ticket portal will reopen soon.
              Viva Terlingua!
            </p> */}
            <p className="text-3xl leading-10 mb-10 lg:mb-12">
              Get your tickets to the 2022 Terlingua Chili Cook Off:
            </p>
            <p className="text-4xl leading-10 mb-10 lg:mb-12 text-gray-800">
              Tickets are $<span className="text-primary">45</span>/person
            </p>
            <div className="relative">
              <h2 className="tickets-details__header">What's Included</h2>
            </div>
            <ul className="mb-10 md:mb-5 lg:mb-10">
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
            <p className="tickets-details__disclaimer flex flex-col items-center justify-center">
              <span className="mb-5">Disclaimer:</span>
              Consumption of too much chili might result in a good time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
