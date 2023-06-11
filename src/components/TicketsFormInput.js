import React from 'react';

export default function TicketsFormInput({
  input,
  handler,
  customHandler,
  showAlternativeInputs,
  error,
}) {
  const ticketsFormLabelStyles = `block text-gray-dark text-left text-[10px] md:text-xs uppercase font-bold font-primary`;
  const inputStyles = `accent-secondary border border-gray-300 border-opacity-10 bg-gray-100 text-gray-700 text-base font-primary block w-full shadow-sm sm:text-sm border-gray-dark rounded-xl px-2 py-2 placeholder-gray-400`;
  const inputErrorStyles = ``;

  const currentStyles = error ? inputErrorStyles : inputStyles;

  if (showAlternativeInputs && input.name.includes('recipient')) {
    return (
      <>
        <label className={ticketsFormLabelStyles} htmlFor={input.name}>
          {input.label}
        </label>

        <input
          {...input}
          className={currentStyles}
          onChange={(e) => handler(e.target.value, input.name)}
        />

        {error && <p className="mt-2 text-sm text-primary">{error}</p>}
      </>
    );
  }

  if (input.type !== 'checkbox' && !input.name.includes('recipient')) {
    return (
      <>
        <label className={ticketsFormLabelStyles} htmlFor={input.name}>
          {input.label}
        </label>

        <input
          {...input}
          className={currentStyles}
          onChange={(e) => handler(e.target.value, input.name)}
        />

        {error && <p className="mt-2 text-sm text-primary">{error}</p>}
      </>
    );
  }

  if (input.type === 'checkbox') {
    return (
      <div className="flex justify-between my-5">
        <label
          className={ticketsFormLabelStyles + ' w-full text-left'}
          htmlFor="firstName"
        >
          {input.label}
        </label>

        <div className="w-full flex justify-end">
          <input
            {...input}
            className="focus:ring-secondary h-4 w-4 text-indigo-600 border-gray-300 rounded"
            onChange={() => customHandler((prevState) => !prevState)}
          />
        </div>

        {error && <p className="mt-2 text-sm text-primary">{error}</p>}
      </div>
    );
  }

  return <div></div>;
}
