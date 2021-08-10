const express = require('express');
const app = express();

const port = 4000;

var eapp = app.get('/', (req, res) => {
	res.send('Hello there!')
});

eapp.listen(port, () => {
	console.log('app is listening on port: ' + port) 
});


