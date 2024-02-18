import React from 'react';
import { Link } from 'gatsby';

export const ticketFormInputs = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    required: true,
    label: 'First Name',
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    required: true,
    label: 'Last Name',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    required: true,
    label: 'Email',
  },
  {
    type: 'email',
    name: 'emailConfirm',
    placeholder: 'Email Confirmation',
    required: true,
    label: 'Email Confirmation',
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: 'Phone number',
    required: true,
    label: 'Phone Number',
  },
  {
    type: 'number',
    name: 'ticketCount',
    placeholder: '#',
    min: 0,
    required: true,
    label: 'Number of Tickets',
  },
  {
    type: 'checkbox',
    name: 'alternativeTicketRecipient',
    placeholder: 'Alternative Ticket Recipient',
    required: false,
    label: 'Add Recipient',
  },
  {
    type: 'text',
    name: 'recipientFirstName',
    placeholder: 'First Name',
    required: false,
    label: 'Recipient First Name',
  },
  {
    type: 'text',
    name: 'recipientLastName',
    placeholder: 'Last Name',
    required: false,
    label: 'Recipient Last Name',
  },
];

export const ticketDetails = [
  'Camping for the entire weekend through Sunday.',
  <>
    {' '}
    <span>
      <Link to="/music" className="text-primary ml-1 inline">
        Live music
      </Link>{' '}
      for four nights straight.
    </span>
  </>,
  "Interact with over forty unique vendors from across the nation and meet Texas' finest authors and artists.",
  'Proceeds go towards fighting ALS, and local charities.',
];
