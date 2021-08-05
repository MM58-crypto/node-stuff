const fs = require('fs') 

const randtext = 'useless text to append to our file'
// A handy method to append content to the end of a file. 
// if the file doesn't exist, it's created.
fs.appendFile('file.log', randtext, err => {
  if (err) {
    console.error(err)
    return
  }
  
})
