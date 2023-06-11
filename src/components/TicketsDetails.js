import React from 'react';
import { ticketDetails } from '../content/tickets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TicketsDetails() {
  return (
    <div>
      <div className="bg-tertiary-light p-2 lg:p-4 rounded-lg">
        <div className="container mx-auto p-2 md:p-4 bg-white shadow-md rounded-lg">
          <div className="flex flex-col lg:flex-row w-full text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 md:gap-4 p-0 md:p-2">
                <h2 className="text-lg md:text-2xl underline font-semibold">
                  ¡Viva Terlingua!
                </h2>
                {/* <p className="text-lg lg:text-xl text-gray-dark">
                The ticket portal for the {new Date().getFullYear()} Terlingua Chili
                Cook Off is{' '}
                <span className="text-primary font-bold">closed</span>. You can
                still purchase your tickets at the front gate when you arrive.
              </p> */}
                <p className="md:text-lg lg:text-xl font-primary">
                  Get your tickets to the {new Date().getFullYear()} Terlingua
                  Chili Cook Off:
                </p>
                <p className="md:text-lg lg:text-xl font-primary">
                  November 2nd - 5th, {new Date().getFullYear()}
                </p>
                <p className="md:text-lg lg:text-xl text-gray-dark font-primary">
                  Tickets are $
                  <span className="text-primary font-bold">53</span>
                  /person
                </p>
              </div>
              <div className="flex flex-col gap-4 p-0 md:p-2">
                <div className="relative">
                  <h2 className="text-lg md:text-xl underline font-semibold">
                    What's Included
                  </h2>
                </div>
                <ul className="lg:text-lg flex flex-col gap-6 md:gap-2">
                  {ticketDetails.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-center font-primary text-left"
                    >
                      <FontAwesomeIcon
                        icon="pepper-hot"
                        className="mr-3 md:mr-2 text-primary"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2 md:gap-4 p-0 md:p-2">
                <h2 className="text-lg md:text-xl underline font-semibold">
                  Physical Address:
                </h2>

                <p className="lg:text-lg font-primary">
                  22970 FM 170 Terlingua, TX 79852
                </p>
              </div>

              <div className="flex flex-col gap-4 p-0 md:p-2">
                <h2 className="text-lg md:text-xl underline font-semibold">
                  Disclaimer:
                </h2>
                <p className="lg:text-lg font-primary">
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
