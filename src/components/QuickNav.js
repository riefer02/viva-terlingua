import React from 'react';
import { Link } from 'gatsby';

const quickNavLinks = [
  { label: 'Home', slug: '' },
  { label: 'About', slug: 'about' },
  { label: 'Music', slug: 'music' },
  { label: 'Resources', slug: 'resources' },
  // { label: `Stories & Events`, slug: 'events' },
  // { label: 'Local Attractions', slug: 'local-attractions' },
  { label: 'Tickets', slug: 'tickets' },
];

export default function QuickNav() {
  return (
    <div className="quick-nav">
      <ul className="quick-nav__list">
        {quickNavLinks.map((navLink, index) => (
          <Link key={index} className="quick-nav__link" to={`/${navLink.slug}`}>
            <div className="quick-nav__text">{navLink.label}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
