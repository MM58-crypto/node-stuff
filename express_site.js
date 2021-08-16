const express = require('express')
const fs = require('fs) 
//const url = require('url')

const app = express();

const port = 8080;

// make a function to group these vars
function apps() { 
	
	let eapp1 = app.get('/', (req, res) => {
	fs.readFile('index.html', function(err, data) {
		res.statusCode = 200
		res.setHeader('Content-Type','text/html')
                res.write(data);
	        return res.end();
	});
});

	let eapp2 = app.get('/about', (req, res) => {
	fs.readFile('about.html', function(err, data) {
		res.statusCode = 200
		res.setHeader('Content-Type','text/html')
                res.write(data);
	        return res.end();
	});
});

	let eapp3 = app.get('/contact-me', (req, res) => {
	fs.readFile('contact-me.html', function(err, data) {
		res.statusCode = 200
		res.setHeader('Content-Type','text/html')
                res.write(data);
	        return res.end();
	});
};

}

apps.listen(port,function(error) {
	if (error) {
		console.log("An error has occurred", error)
	}
	else {
		console.log("Server is listening on port: " + port)
	}
})



