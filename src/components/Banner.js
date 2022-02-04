import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Banner() {
  const [sellTickets, setSellTickets] = useState(false);

  return (
    <div className="banner">
      <div className="banner__content container mx-auto">
        {sellTickets && (
          <p className="banner__message">
            Buy Tickets
            <Link to="/tickets" className="banner__message-link">
              Here
            </Link>
            for {new Date().getFullYear()} Tolbert's Terlingua Chili Cook Off
          </p>
        )}
        <p className="banner__message">
          <Link to="/resources" className="banner__message-link">
            New Resources{' '}
          </Link>
          {new Date().getFullYear()} Tolbert's Chili Cook Offs
        </p>
      </div>
    </div>
  );
}
