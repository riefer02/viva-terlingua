import React, { useRef, useState } from 'react';
import TicketsFormInput from './TicketsFormInput';
import { ticketFormInputs } from '../content/tickets';
import getStripe from '../utils/stripe';
import validator from 'validator';

export default function TicketsForm() {
  const formRef = useRef(null);
  const [message, setMessage] = useState(null);
  const [forAlternativeRecipient, setForAlternativeRecipient] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirm: '',
    phone: '',
    ticketCount: null,
    recipientFirstName: '',
    recipientLastName: '',
  });

  const handleInput = (value, fieldName) => {
    switch (fieldName) {
      case 'firstName':
        setForm((state) => {
          return { ...state, firstName: value.replace(' ', '').trim() };
        });
        break;
      case 'lastName':
        setForm((state) => {
          return { ...state, lastName: value.replace(' ', '').trim() };
        });
        break;
      case 'email':
        setForm((state) => {
          return { ...state, email: value };
        });
        break;
      case 'emailConfirm':
        setForm((state) => {
          return { ...state, emailConfirm: value };
        });
        break;
      case 'phone':
        setForm((state) => {
          let formattedPhone = value.replace(/-|\s/g, '');
          formattedPhone = formattedPhone
            .replace(/"/g, '')
            .replace(/'/g, '')
            .replace(/\(|\)/g, '');
          return { ...state, phone: formattedPhone };
        });
        break;
      case 'ticketCount':
        setForm((state) => {
          return { ...state, ticketCount: parseInt(value) };
        });
        break;
      case 'recipientFirstName':
        setForm((state) => {
          return {
            ...state,
            recipientFirstName: value.replace(' ', '').trim(),
          };
        });
        break;
      case 'recipientLastName':
        setForm((state) => {
          return { ...state, recipientLastName: value.replace(' ', '').trim() };
        });
        break;
      default:
        return;
    }
  };

  const handleValidation = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
    const {
      firstName,
      lastName,
      email,
      emailConfirm,
      phone,
      ticketCount,
      recipientFirstName,
      recipientLastName,
    } = form;

    if (validator.isEmpty(firstName)) {
      setMessage(`What's your first name?`);
      return false;
    }
    if (validator.isEmpty(lastName)) {
      setMessage(`What's your last name?`);
      return false;
    }
    if (!validator.isEmail(email)) {
      setMessage(`That's not a email.`);
      return false;
    }
    if (email !== emailConfirm) {
      setMessage(`These email's don't match.`);
      return false;
    }
    if (!validator.isMobilePhone(phone)) {
      setMessage(`Please provide a phone number.`);
      return false;
    }
    if (!ticketCount >= 1 || ticketCount === null) {
      setMessage(`How many tickets is that?`);
      return false;
    }
    if (
      forAlternativeRecipient &&
      (validator.isEmpty(recipientFirstName) ||
        validator.isEmpty(recipientLastName))
    ) {
      setMessage(`We need details about your ticket recipient.`);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) redirectToCheckout(e);
  };

  // Checkout Logic
  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setMessage('Processing...');

    let clientReferenceId = `${form.firstName}—${form.lastName}—${
      form.ticketCount
    }—${form.phone}—${Date.now()}`;

    if (forAlternativeRecipient)
      clientReferenceId += `—${form.recipientFirstName}—${form.recipientLastName}`;

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [
        { price: process.env.TICKET_PRICE, quantity: form.ticketCount },
      ],
      customerEmail: form.email,
      successUrl: `${process.env.DOMAIN_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${process.env.DOMAIN_URL}/tickets`,
      clientReferenceId,
    });

    if (error) {
      console.warn('Error:', error);
      setMessage('Something went wrong. Try again soon.');
    }
  };
  return (
    <div ref={formRef} className="tickets-form mx-auto">
      <h2 className="tickets-form__header">Ticket Order Form</h2>
      <div className="tickets-form__message">{message ? message : ''}</div>
      <form className="tickets-form__content pointer-events-none opacity-60">
        {ticketFormInputs.map((input, index) => (
          <TicketsFormInput
            key={index}
            input={input}
            handler={handleInput}
            customHandler={setForAlternativeRecipient}
            showAlternativeInputs={forAlternativeRecipient}
            disabled
          />
        ))}
        <button
          className="tickets-form__submit-btn"
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled
        >
          Portal is Closed
        </button>
        <sub className="mt-5 text-sm">
          *All information is handled through
          <a className="text-indigo-600 mx-1" href="https://stripe.com/">
            Stripe
          </a>
          payment integration systems.
        </sub>
      </form>
    </div>
  );
}
