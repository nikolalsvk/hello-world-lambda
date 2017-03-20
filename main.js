'use strict';

exports.handler = (event, context, callback) => {
  context.succeed({
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "Hello world"
  });
};
