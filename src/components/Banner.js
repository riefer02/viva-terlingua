import React from 'react';
import { Link } from 'gatsby';

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
          for the {new Date().getFullYear()} Terlingua Chili Cook Off
        </p>
        {/* <p className="banner__message">
          <Link to="/resources" className="banner__message-link">
            New Resources{' '}
          </Link>
          {new Date().getFullYear()} Tolbert's Chili Cook Offs
        </p> */}
        {/* <p className="text-lg">
          Meet Your {new Date().getFullYear()} Terlingua
          <Link to="/champions/2022" className={linkStyle}>
            Champions
          </Link>
        </p> */}
      </div>
    </div>
  );
}
