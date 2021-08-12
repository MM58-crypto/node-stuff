const express = require('express')

const app = express();

/* There is a special routing method, app.all(), which will be called in response to any HTTP method. This is used for loading middleware functions at a particular path for all request methods.   */
app.all('/test', (req, res) => {
	res.send('Hello world!') 
	console.log('waddup...');
});

// a route handler is code that is looking for a request to a specific incoming URL such as /login 

