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
            {/* <p className="text-3xl mb-10 lg:mb-8 leading-[40px]">
              Viva Terlingua! The ticket portal for the 2022 Terlingua Chili
              Cook Off is <span className="text-primary">closed</span>. You can
              still purchase your tickets at the front gate when you arrive.
            </p> */}
            <p className="text-3xl mb-10 lg:mb-8 leading-[40px]">
              Thank you everyone for attending the 2022 Original Terlingua
              International Championship Chili Cookoff. We look forward to
              seeing you all next year.
            </p>
            {/* <p className="text-3xl mb-10 lg:mb-8">
              Get your tickets to the 2022 Terlingua Chili Cook Off:
            </p> */}
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
            <p className="text-3xl mb-14 -mt-6 text-secondary">
              22970 FM 170 Terlingua, TX 79852
            </p>
            <p className="tickets-details__disclaimer flex flex-col items-center justify-center ">
              <span className="mb-5">Disclaimer:</span>
              Consumption of too much chili might result in a good time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
