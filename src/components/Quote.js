import React from 'react';

export default function Quote({ quote }) {
  return (
    <div className="px-8 lg:px-4 py-10 bg-tertiary-light shadow-md rounded-lg max-w-6xl mx-auto">
      <blockquote className="text-xl w-full font-secondary text-gray-dark relative">
        <div className="text-base md:text-xl lg:text-2xl max-w-xl lg:max-w-4xl mx-auto">{quote.text}</div>
        <span className="block text-gray-dark font-bold mt-4 text-sm md:text-xl">
          {quote.author}
        </span>
      </blockquote>
    </div>
  );
}
