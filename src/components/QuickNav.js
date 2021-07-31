import React from "react";
import { Link } from "gatsby";

export default function QuickNav() {
  return (
    <div className="quick-nav">
      <ul className="quick-nav__list">
        <Link className="quick-nav__link" to="/">
          <div className="quick-nav__text">Home</div>
        </Link>
        <Link className="quick-nav__link" to="/tickets">
          <div className="quick-nav__text">Tickets</div>
        </Link>
        <Link className="quick-nav__link" to="/events">
          <div className="quick-nav__text">Events</div>
        </Link>
        <Link className="quick-nav__link" to="/music">
          <div className="quick-nav__text">Music</div>
        </Link>
        <Link className="quick-nav__link" to="/local-attractions">
          <div className="quick-nav__text">Local Attractions</div>
        </Link>
        <Link className="quick-nav__link" to="/about">
          <div className="quick-nav__text">About</div>
        </Link>
      </ul>
    </div>
  );
}
