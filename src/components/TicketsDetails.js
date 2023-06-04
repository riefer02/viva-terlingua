import React from 'react';
import { ticketDetails } from '../content/tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TicketsDetails() {
  return (
    <div>
      <div className="bg-tertiary-light p-4 rounded-lg">
        <div className="container mx-auto p-4 bg-gray-light-1 shadow-md rounded-lg">
          <div className="flex flex-col lg:flex-row w-full text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 p-2">
                <div className="relative">
                  <h2 className="text-2xl font-semibold">Viva Terlingua!</h2>
                </div>
                {/* <p className="text-lg lg:text-xl text-gray-dark">
                The ticket portal for the 2022 Terlingua Chili
                Cook Off is{' '}
                <span className="text-primary font-bold">closed</span>. You can
                still purchase your tickets at the front gate when you arrive.
              </p> */}
                <p className="text-lg lg:text-xl font-primary">
                  Get your tickets to the 2022 Terlingua Chili Cook Off:
                </p>
                <p className="text-lg lg:text-xl font-primary">
                  November 2nd - 5th, 2022
                </p>
                <p className="text-lg lg:text-xl text-gray-dark font-primary">
                  Tickets are $
                  <span className="text-primary font-bold">50</span>
                  /person
                </p>
              </div>
              <div className="flex flex-col gap-4 p-2">
                <div className="relative">
                  <h2 className="text-2xl font-semibold">What's Included</h2>
                </div>
                <ul className="text-lg">
                  {ticketDetails.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center mb-2 font-primary"
                    >
                      <FontAwesomeIcon
                        icon="pepper-hot"
                        className="mr-2 text-primary"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-2">
                <h2 className="text-2xl font-semibold">Physical Address:</h2>

                <p className="text-lg font-primary">
                  22970 FM 170 Terlingua, TX 79852
                </p>
              </div>

              <div className=" flex flex-col gap-4 p-2">
                <h2 className="text-2xl font-semibold">Disclaimer:</h2>
                <p className="text-lg font-primary">
                  Consumption of too much chili might result in a good time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
