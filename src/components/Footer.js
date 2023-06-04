import React from 'react';

export default function Footer() {
  const linkStyles = 'text-primary-light hover:text-gray-dark transition ease-linear';

  return (
    <footer className="bg-tertiary border-t border-t-secondary min-h-[80px] flex items-center justify-center py-4 pb-6 lg:p-0">
      <div className="flex flex-col lg:flex-row md:w-3/4 xl:w-1/2 mx-auto justify-between items-center gap-2 text-sm h-full">
        <div>
          Contact Us:{' '}
          <a href="mailto:abowlofred@gmail.com" className={linkStyles}>
            abowlofred@gmail.com
          </a>
        </div>
        <div>&copy; {new Date().getFullYear()}, Viva Terlingua!</div>
        <div>
          Website by:{' '}
          <a
            href="https://twitter.com/riefer02"
            target="_blank"
            className={linkStyles}
          >
            Andrew Riefenstahl @riefer02
          </a>
        </div>
      </div>
    </footer>
  );
}
