exports.handler = async function (event, context) {
  // your server-side functionality
  return {
    statusCode: 200,
    headers: {
      Test: 'Test',
    },
    body: JSON.stringify({
      gibberish: 'Gibberish',
      envTest: `${process.env.NODE_ENV} hey~!`,
    }),
  };
};
