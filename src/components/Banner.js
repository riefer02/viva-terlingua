import React from 'react';
import { Link } from 'gatsby';

export default function Banner() {
  return (
    <div className="banner hidden sm:flex items-center justify-center bg-tertiary min-h-[50px]">
      <div className="flex items-center justify-center w-full container mx-auto">
        {/* <p className="banner__message">
          Buy Tickets
          <Link to="/tickets" className="banner__message-link">
            Here
          </Link>
          for {new Date().getFullYear()} Tolbert's Terlingua Chili Cook Off
        </p> */}
        {/* <p className="banner__message">
          <Link to="/resources" className="banner__message-link">
            New Resources{' '}
          </Link>
          {new Date().getFullYear()} Tolbert's Chili Cook Offs
        </p> */}
        <p className="text-lg">
          Meet Your 2022 Terlingua
          <Link to="/champions/2022" className="ml-1 uppercase text-primary hover:text-secondary transition">
            Champions
          </Link>
        </p>
      </div>
    </div>
  );
}
