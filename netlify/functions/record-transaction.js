const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const axios = require("axios");

const recordTransaction = (session) => {
  const transaction = {
    name: session.customer,
    numberOfTickets: session.amount_total,
    email: session.customer_details.email,
    phoneNumber: "6664206969",
    customerID: session.customer,
    transactionID: session.id,
    festivalYear: "2021",
  };

  axios
    .post(`${process.env.STRAPI_URL}/ticket-holders`, transaction)
    .then((res) => {
      return {
        statusCode: 200,
        body: { message: "success", data: res.data },
      };
    })
    .catch((err) => {
      return {
        statusCode: 400,
        body: { message: err.message },
      };
    });
};

exports.handler = async function ({ body, headers }, context) {
  const payload = body;
  const sig = headers["stripe-signature"];

  try {
    const stripeEvent = await stripe.webhooks.constructEvent(
      payload,
      sig,
      webhookSecret
    );

    if (stripeEvent.type === "checkout.session.completed") {
      const session = stripeEvent.data.object;
      recordTransaction(session);
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};
