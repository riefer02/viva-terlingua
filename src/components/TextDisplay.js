import React from "react";
import { Link } from "gatsby";

export default function TextDisplay({ texts }) {
  const { Links, author, postDate, primaryText } = texts;

  const linkList = () => {
    return Links.map((link, index) => {
      if (link.type === "internal") {
        return (
          <Link to={link.url} key={index} className="text-display__tag">
            <div className="text-display__tag-text">{link.label}</div>
          </Link>
        );
      } else {
        return (
          <a
            href={link.url}
            key={index}
            target="_blank"
            className="text-display__tag"
          >
            <div className="text-display__tag-text">{link.label}</div>
          </a>
        );
      }
    });
  };

  return (
    <div className="text-display__container px-8 lg:px-0">
      <div className="text-display__content">
        <div className="text-display__content-wrapper">
          <div className="text-display__author underline">{author}</div>
          {postDate && <div className="text-display__date">{postDate}</div>}
          <div
            className="text-display__text-area"
            dangerouslySetInnerHTML={{ __html: primaryText.data.primaryText }}
          ></div>
          <div className="text-display__actions">
            <button className="text-display__action-btn">
              <Link to="/tickets">
                <div className="text-display__action-text">
                  Join us in Terlingua
                </div>
              </Link>
            </button>
            <hr />
            <ul className="text-display__tags">{linkList()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

TextDisplay.defaultProps = {
  texts: {
    Links: [
      { type: "internal", url: "/", label: "Home" },
      { type: "internal", url: "/tickets", label: "Tickets" },
    ],
    author: "John Doe",
    postDate: "Today",
    primaryText: "It was a good day.",
  },
};
