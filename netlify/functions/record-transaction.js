const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const axios = require('axios');

const recordTransaction = async (session) => {
  const personalInfo = session.client_reference_id.split('—');
  const fullName = `${personalInfo[0]} ${personalInfo[1]}`;
  const date = new Date();

  const transaction = {
    name: fullName,
    firstName: personalInfo[0],
    lastName: personalInfo[1],
    numberOfTickets: personalInfo[2],
    email: session.customer_details.email,
    phoneNumber: personalInfo[3],
    customerID: session.customer,
    transactionID: session.id,
    timeOfPurchase: personalInfo[4],
    recipientFirstName: personalInfo[5] ? personalInfo[5] : '',
    recipientLastName: personalInfo[6] ? personalInfo[6] : '',
    cookOffYear: date.getFullYear(),
  };

  try {
    const res = await axios.post(
      `${process.env.STRAPI_URL}/api/ticket-holders`,
      transaction
    );
    return {
      statusCode: 200,
      body: { message: 'success', data: res.data },
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: { message: err.message },
    };
  }
};

exports.handler = async function ({ body, headers }, context) {
  const payload = body;
  const sig = headers['stripe-signature'];

  try {
    const stripeEvent = await stripe.webhooks.constructEvent(
      payload,
      sig,
      webhookSecret
    );

    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object;
      await recordTransaction(session);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        received: true,
      }),
    };
  } catch (err) {
    let axiosExists = axios ? true : false;

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}, axios is ${
        axiosExists ? 'installed' : 'not found'
      }`,
    };
  }
};
