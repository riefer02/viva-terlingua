import React from "react";
import { Link } from "gatsby";

export default function QuickNav() {
  return (
    <div>
      <h1>Quick Nav</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/events">Events</Link>
        <Link to="/music">Music</Link>
        <Link to="/local-attractions">Local Attractions</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
}
