import React from 'react';

export default function TicketsFormInput({
  input,
  handler,
  customHandler,
  showAlternativeInputs,
}) {
  const ticketsFormLabelStyles = `mb-2 text-xl inline mr-auto`

  if (showAlternativeInputs && input.name.includes('recipient')) {
    return (
      <>
        <label className={ticketsFormLabelStyles} htmlFor={input.name}>
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
        <label className={ticketsFormLabelStyles} htmlFor={input.name}>
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
      <div className="flex justify-between my-5">
        <label className={ticketsFormLabelStyles + ' w-full text-left'} htmlFor="firstName">
          {input.label}
        </label>
        <div className="w-full flex justify-end">
          <input
            {...input}
            className="tickets-form__input tickets-form__input--checkbox"
            onChange={() => customHandler((prevState) => !prevState)}
          ></input>
        </div>
      </div>
    );

  return <div></div>;
}
