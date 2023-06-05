import React from 'react';
import { Link } from 'gatsby';

const quickNavLinks = [
  { label: 'Home', slug: '' },
  { label: 'About', slug: 'about' },
  { label: 'Music', slug: 'music' },
  { label: 'Resources', slug: 'resources' },
  { label: `Events`, slug: 'events' },
  { label: 'Terlingua', slug: 'local-attractions' },
  { label: 'Tickets', slug: 'tickets' },
];

export default function QuickNav() {
  return (
    <div className="">
      <ul className="grid grid-cols-3 sm:flex flex-row flex-wrap gap-4 justify-center items-center mx-auto">
        {quickNavLinks.map((navLink, index) => (
          <Link
            key={index}
            className="shadow-md bg-primary-light p-2 rounded-lg hover:bg-secondary text-white transition-all duration-200 transform -skew-x-14 -skew-y-0 py-1"
            to={`/${navLink.slug}`}
          >
            <div className=" transform skew-x-14 skew-y-0">{navLink.label}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
