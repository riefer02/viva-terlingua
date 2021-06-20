import React from "react";
import { Link } from "gatsby";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__content container mx-auto">
        <p className="banner__message">
          Buy Tickets{" "}
          <Link to="/tickets" className="banner__message-link">
            Here
          </Link>{" "}
          for 2021 Terlingua Chili Cook Off
        </p>
      </div>
    </div>
  );
}
