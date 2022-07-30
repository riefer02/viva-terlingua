import React from 'react';

export default function TicketsFormInput({
  input,
  handler,
  customHandler,
  showAlternativeInputs,
}) {
  if (showAlternativeInputs && input.name.includes('recipient')) {
    return (
      <>
        <label className="tickets-form__label" htmlFor={input.name}>
          {input.label}
        </label>
        <input
          {...input}
          className="tickets-form__input"
          onChange={(e) => handler(e.target.value, input.name)}
        ></input>
      </>
    );
  }

  if (input.type !== 'checkbox' && !input.name.includes('recipient'))
    return (
      <>
        <label className="tickets-form__label" htmlFor={input.name}>
          {input.label}
        </label>
        <input
          {...input}
          className="tickets-form__input"
          onChange={(e) => handler(e.target.value, input.name)}
        ></input>
      </>
    );

  if (input.type === 'checkbox')
    return (
      <div className="flex justify-between">
        <label className="tickets-form__label w-full" htmlFor="firstName">
          {input.label}
        </label>
        <input
          {...input}
          className="tickets-form__input tickets-form__input--checkbox w-full"
          onChange={() => customHandler((prevState) => !prevState)}
        ></input>
      </div>
    );

  return <div></div>;
}
