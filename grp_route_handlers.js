const express = require('express');

const router = express.Router();

/* it is useful to group route handlers for a particular part of a site together and access them using a common route-prefix (e.g. a site with a Wiki might have all wiki-related routes in one file and have them accessed with a route prefix of /wiki/)   */ 

// route #1 

router.get('/', function(req, res) { 
	res.send('home page');
});

// route #2 
router.get('/about', function(req, res) { 
	res.send('about page');
});

module.exports = router;
