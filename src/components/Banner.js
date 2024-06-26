import React from 'react';
import { Link } from 'gatsby';
import { CURRENT_YEAR } from '../constants';

export default function Banner() {
  const linkStyle =
    'mx-2 uppercase text-primary hover:text-secondary transition underline';

  return (
    <div className="banner hidden sm:flex items-center justify-center bg-gray-light-1 min-h-[50px]">
      <div className="flex items-center justify-center w-full container mx-auto ">
        <p className="text-lg">
          Buy Tickets
          <Link to="/tickets" className={linkStyle}>
            Here
          </Link>
          for the {CURRENT_YEAR} Terlingua Chili Cook Off
          {/* Fun Fact: Many <span className="text-primary">chili peppers</span>{' '}
          rely on bees for pollination. */}
        </p>
        {/* <p className="banner__message">
          <Link to="/resources" className="banner__message-link">
            New Resources{' '}
          </Link>
          {CURRENT_YEAR} Tolbert's Chili Cook Offs
        </p> */}
        {/* <p className="text-lg">
          Meet Your {CURRENT_YEAR} Terlingua
          <Link to="/champions/2022" className={linkStyle}>
            Champions
          </Link>
        </p> */}
      </div>
    </div>
  );
}
