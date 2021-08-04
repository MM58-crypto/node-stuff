
// require is used to import the http library from node
const http = require('http')

const port = 3000 

const server = http.createServer(function(req, res) {
  	 res.statusCode = 200
	 res.setHeader('Content-Type','text/html') 
	 res.end('<h2>waddup</h2>')

}) 

server.listen(port,function(error) {
	if (error) {
	   console.log('Oops,an error has occurred',error)
	}
	else {
	 console.log('Server is listening on port' + port)
	}

})

