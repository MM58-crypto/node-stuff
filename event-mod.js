// we import/require the events module/library and store it in a const
const eventemitter = require('events')
const eventem = new EventEmitter() 
//on method is used to add a callback function that's going to be executed when the event is triggered
eventem.on('start',  (start, end) =>  {
	console.log(`started from ${start} to ${end}`)
})
	
// this method triggers an event when used
eventem.emit('start', 1, 50)

