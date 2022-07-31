exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      Test: 'Test',
    },
    body: JSON.stringify({
      gibberish: 'Gibberish',
    }),
  };
};
