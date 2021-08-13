const express = require('express')
const app = express();

const port = 8000;

// a middleware function
let middleware_func = function(req, res, next) {
	//stuff the func is to do
	next(); // used to call the next middleware function in the chain
}

// use() is a method that allows us to register a middleware. The middleware method is like an interceptor in java, this method always executes for all requests.
// Function added with use() for all routes and verbs
app.use(middleware_func);

//function added with use() for a particular route
app.use('/homepage', middleware_func);

app.listen(port);

