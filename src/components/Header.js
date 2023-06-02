import React from 'react';
import { Link } from 'gatsby';
import NavBar from 'components/NavBar';
import Banner from 'components/Banner';
import logo from '../assets/images/oticcc-logo-white-sm.png';

export default function Header() {
  return (
    <header className="shadow-md z-50 w-full top-0 fixed md:relative bg-primary">
      <Banner />
      <div className="flex items-center justify-between max-w-7xl container mx-auto text-gray-light-1">
        <Link to="/">
          <div className="flex justify-center items-center gap-4">
            <img
              className="h-10 w-10"
              src={logo}
              alt="Tolbert's International Wick Fowler Chili Cook Off"
            />
            <p className="md:text-lg lg:text-xl">
              The Tolbert Chili Cookoff Group
            </p>
          </div>
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
