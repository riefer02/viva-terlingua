import React from 'react';

const Hamburger = ({ setMobileNavActive, mobileNavActive }) => {

  return (
    <div
      onClick={() => setMobileNavActive((open) => !open)}
      className={
        'flex lg:hidden flex-col items-center gap-2 justify-center h-12 w-10 mx-auto transition-all duration-500 cursor-pointer'
      }
      id="hamburger"
      role="button"
      aria-label="Toggle navigation"
    >
      <div
        className={
          'rounded-lg h-1 w-full bg-gray-light-1 rounded-9 opacity-100 transform transition-all duration-250'
        }
      ></div>
      <div
        className={
          'rounded-lg h-1 w-full bg-gray-light-1 rounded-9 opacity-100 transform transition-all duration-250'
        }
      ></div>
      <div
        className={
          'rounded-lg h-1 w-full  bg-gray-light-1 rounded-9 opacity-100 transform transition-all duration-250'
        }
      ></div>
    </div>
  );
};

export default Hamburger;
