import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const linkStyles =
    'text-gray-light-1 hover:text-gray-dark transition ease-linear';

  return (
    <footer className="bg-primary text-gray-light-1 font-primary min-h-[64px] flex items-center justify-center py-4 pb-6 lg:p-0">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full mx-auto justify-between items-center gap-2 text-sm h-full">
        <div>
          Contact Us:{' '}
          <a href="mailto:abowlofred@gmail.com" className={linkStyles}>
            abowlofred@gmail.com
          </a>
        </div>
        <div>&copy; {currentYear}, Viva Terlingua!</div>
        <div>
          Website by:{' '}
          <a
            href="https://twitter.com/riefer02"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            Andrew Riefenstahl @riefer02
          </a>
        </div>
        <div>
          <Link to="/archive" className={linkStyles}>
            OTICCC Archive
          </Link>
        </div>
      </div>
    </footer>
  );
}
