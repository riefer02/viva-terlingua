import React from 'react';
import { Link } from 'gatsby';

export default function TextDisplay({ texts }) {
  const { Links, author, postDate, primaryText } = texts;

  const commonStyles =
    'inline-block hover:bg-secondary transition my-4 mx-5 -skew-x-12 text-xl bg-primary-light text-white px-2 py-1 shadow-md transform skew-x-14 transition-all duration-200';
  const linkList = () => {
    return Links.map((link, index) => {
      if (link.type === 'internal') {
        return (
          <Link to={link.url} key={index} className={commonStyles}>
            <div className="transform skew-x-12">{link.label}</div>
          </Link>
        );
      } else {
        return (
          <a
            href={link.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={commonStyles}
          >
            <div className="transform skew-x-12">{link.label}</div>
          </a>
        );
      }
    });
  };

  return (
    <div className="bg-tertiary-light p-4 lg:p-4 shadow-md text-gray-dark rounded-lg max-w-5xl mx-auto">
      <div className="shadow-md bg-white p-5 lg:px-10 py-6 rounded-lg">
        <div className="border-b-primary-light border-b mb-4">
          {postDate && (
            <div className="text-base md:text-lg lg:text-xl mb-2 font-primary">
              {postDate}
            </div>
          )}
          <div className="relative font-secondary text-lg md:text-xl lg:text-3xl z-10 inline-block mb-2">
            {author}
          </div>
        </div>
        <div
          className="m-auto md:leading-loose lg:leading-loose md:text-lg lg:text-xl font-primary mb-8 text-left indent-8"
          dangerouslySetInnerHTML={{
            __html: primaryText?.data?.primaryText || primaryText,
          }}
        ></div>
        <div className="m-3 flex items-center justify-center flex-col">
          <button
            className={`bg-primary-light hover:bg-secondary -skew-x-12 px-3 py-2 text-xl text-white shadow-md transition-all duration-200 transform skew-x-14 mb-4 ${commonStyles}`}
          >
            <Link to="/tickets">
              <div className="transform skew-x-12">Join us in Terlingua</div>
            </Link>
          </button>
          <hr />
          <ul className="mx-auto max-w-3xl flex flex-col md:flex-row text-center">
            {linkList()}
          </ul>
        </div>
      </div>
    </div>
  );
}

TextDisplay.defaultProps = {
  texts: {
    Links: [
      { type: 'internal', url: '/', label: 'Home' },
      { type: 'internal', url: '/tickets', label: 'Tickets' },
    ],
    author: 'John Doe',
    postDate: 'Today',
    primaryText: 'It was a good day.',
  },
};
