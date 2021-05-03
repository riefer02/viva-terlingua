import React from "react";

export default function Quote({ quote }) {
  return (
    <div>
      <blockquote className="quote__text">
        {quote[0].text}
        <span className="quote__author">{quote[0].author}</span>
      </blockquote>
    </div>
  );
}
