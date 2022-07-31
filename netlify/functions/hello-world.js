exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      ['Env-Test']: process.env.MY_DOG,
    },
    body: JSON.stringify({
      message: 'Hello There',
    }),
  };
};
