import React, { useRef, useState } from 'react';
import TicketsFormInput from './TicketsFormInput';
import { ticketFormInputs } from '../content/tickets';
import getStripe from '../utils/stripe';
import validator from 'validator';

export default function TicketsForm() {
  const formRef = useRef(null);
  const errorRef = useRef(null); // Add this reference
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
      errorRef.current.scrollIntoView({ behavior: 'smooth' }); // Add this line
      return false;
    }
    if (validator.isEmpty(lastName)) {
      setMessage(`What's your last name?`);
      return false;
    }
    if (!validator.isEmail(email)) {
      setMessage(`That's not an email.`);
      return false;
    }
    if (email !== emailConfirm) {
      setMessage(`These emails don't match.`);
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
    <div className="mx-auto w-full">
      <div className="bg-tertiary-light p-4 lg:p-4 sm:rounded-lg">
        <div
          ref={formRef}
          className="bg-gray-light-1 mx-auto w-full shadow-md rounded-lg p-4 md:p-6 prose prose-sm md:prose-lg lg:prose-xl"
        >
          <h2 className="text-center">Ticket Order Form</h2>
          {message && (
            <p ref={errorRef} className="text-primary">
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {ticketFormInputs.map((input, index) => (
              <TicketsFormInput
                key={index}
                input={input}
                handler={handleInput}
                customHandler={setForAlternativeRecipient}
                showAlternativeInputs={forAlternativeRecipient}
              />
            ))}
            <button
              className="mt-4 w-full py-2 text-white bg-primary hover:bg-secondary focus:outline-none rounded-lg transition-opacity opacity-70 disabled:opacity-50"
              type="submit"
              disabled
            >
              Review Submission
            </button>
            <p className="text-xs text-gray-dark">
              *All information is handled through
              <a href="https://stripe.com/" className="text-indigo-500 mx-1">
                Stripe
              </a>
              payment integration systems.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
