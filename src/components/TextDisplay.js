import React from 'react';
import { Link } from 'gatsby';

export default function TextDisplay({ texts }) {
  const { Links, author, postDate, primaryText } = texts;

  const linkList = () => {
    return Links.map((link, index) => {
      if (link.type === 'internal') {
        return (
          <Link
            to={link.url}
            key={index}
            className="inline-block my-4 mx-5 -skew-x-12 text-xl bg-primary-light text-white px-2 py-1 shadow-md transform skew-x-14 transition-all duration-200"
          >
            <div className="transform skew-x-12">{link.label}</div>
          </Link>
        );
      } else {
        return (
          <a
            href={link.url}
            key={index}
            target="_blank"
            className="inline-block my-4 mx-5 text-xl -skew-x-12 bg-primary-light text-white px-2 py-1 shadow-md transform skew-x-14 transition-all duration-200"
          >
            <div className="transform skew-x-12">{link.label}</div>
          </a>
        );
      }
    });
  };

  return (
    <div className="bg-tertiary-light p-4 inline-block shadow-md text-grey-dark-3 rounded-lg max-w-5xl">
      <div className="shadow-md bg-white p-5 lg:p-10 rounded-lg">
        <div className="relative font-secondary text-3xl z-10 inline-block underline mb-2">
          {author}
        </div>
        {postDate && <div className="text-2xl mb-2">{postDate}</div>}
        <div
          className="m-auto leading-loose text-xl font-secondary mb-8"
          dangerouslySetInnerHTML={{ __html: primaryText.data.primaryText }}
        ></div>
        <div className="m-3">
          <button className="bg-primary-light px-3 py-2 text-xl text-white shadow-md transition-all duration-200 transform skew-x-14 mb-4">
            <Link to="/tickets">
              <div className="transform skew-x-14">Join us in Terlingua</div>
            </Link>
          </button>
          <hr />
          <ul>{linkList()}</ul>
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
