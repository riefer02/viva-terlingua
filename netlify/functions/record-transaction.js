const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const axios = require("axios");

const recordTransaction = async (session) => {
  const personalInfo = session.client_reference_id.split("—");
  const fullName = `${personalInfo[0]} ${personalInfo[1]}`;

  const transaction = {
    name: fullName,
    numberOfTickets: personalInfo[2],
    email: session.customer_details.email,
    phoneNumber: personalInfo[3],
    customerID: session.customer,
    transactionID: session.id,
    timeOfPurchase: personalInfo[4],
  };

  await axios
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

    let session;
    let axiosRecord;

    if (stripeEvent.type === "checkout.session.completed") {
      session = stripeEvent.data.object;
      axiosRecord = await recordTransaction(session);
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        received: true,
        stripeEvent,
        axiosRecord,
        session,
      }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message} + ${webhookSecret}`,
    };
  }
};
