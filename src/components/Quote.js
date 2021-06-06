import React from "react";

export default function Quote({ quote }) {
  return (
    <div>
      <blockquote className="quote__text">
        <div>{quote.text}</div>
        <span className="quote__author">{quote.author}</span>
      </blockquote>
    </div>
  );
}
