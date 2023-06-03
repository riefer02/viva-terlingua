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
    <div className="">
      <ul className="flex flex-row flex-wrap justify-center items-center mx-auto">
        {quickNavLinks.map((navLink, index) => (
          <Link
            key={index}
            className="shadow-md bg-primary-ligh hover:bg-secondary text-white transition-all duration-200 transform -skew-x-14 -skew-y-0 m-4 py-1"
            to={`/${navLink.slug}`}
          >
            <div className=" transform skew-x-14 skew-y-0">
              {navLink.label}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
