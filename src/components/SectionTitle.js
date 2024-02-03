import React from 'react';

export default function SectionTitle({ title }) {
  return (
    <div className="flex items-center justify-center pt-6">
      <div className="-skew-x-12 inline-block mx-auto text-center px-8 py-1 relative skew-x-10 shadow-md bg-primary-light mb-8">
        <h3 className="skew-x-12 font-primary p-2 text-white drop-shadow-lg capitalize text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
}
