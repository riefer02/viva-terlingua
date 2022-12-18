import React from "react";

export default function Quote({ quote }) {
  return (
    <div className="px-8 lg:px-0">
      <blockquote className="quote__text">
        <div>{quote.text}</div>
        <span className="quote__author">{quote.author}</span>
      </blockquote>
    </div>
  );
}
