import React from 'react';
import { Link } from 'gatsby';
import NavBar from 'components/NavBar';
import Banner from 'components/Banner';
import logo from '../assets/images/oticcc-logo-white-sm.png';

export default function Header() {
  return (
    <header className="shadow-md z-50 w-full top-0 fixed sm:relative bg-primary px-2 sm:px-0">
      <Banner />
      <div className="flex items-center justify-between max-w-7xl py-2 px-3 lg:py-0 container mx-auto text-gray-light-1">
        <Link to="/">
          <div className="flex justify-center items-center gap-4">
            <img
              className="h-10 w-10"
              src={logo}
              alt="Tolbert's International Wick Fowler Chili Cook Off"
            />
            <p className="md:text-lg lg:text-xl hidden sm:block">
              The Tolbert Chili Cookoff Group
            </p>
          </div>
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
