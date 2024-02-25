import React from 'react';
import { Link } from 'gatsby';

export default function Banner() {
  const linkStyle =
    'mx-2 uppercase text-primary hover:text-secondary transition underline';

  return (
    <div className="banner hidden sm:flex items-center justify-center bg-gray-light-1 min-h-[50px]">
      <div className="flex items-center justify-center w-full container mx-auto ">
        <p className="text-lg">
          {/* // Calculate Date Using A using a use effect  */}
          {/* Buy Tickets
          <Link to="/tickets" className={linkStyle}>
            Here
          </Link>
          for the {new Date().getFullYear()} Terlingua Chili Cook Off */}
          Fun Fact: Many <span className="text-primary">chili peppers</span>{' '}
          rely on bees for pollination.
        </p>
      </div>
    </div>
  );
}
