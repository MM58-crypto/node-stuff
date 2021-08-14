const express = require('express');
const app = express();

//These can return any content required, but must be called after all other app.use() and routes calls so that they are the last middleware in the request handling process!
// This default error-handling middleware function is added at the end of the middleware function stack.

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error: Something went wrong!');
});

//The console.error() method writes an error message to the console.

