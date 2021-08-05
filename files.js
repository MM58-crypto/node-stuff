
const fs = require('fs')

const text = 'some text/content for our file'
// a method to write to files in node.js
fs.writeFile('hello.txt', text, err => {
	if (err) {
	   console.error(err)
	   return
	}
  }) 

/* another way: 
 *
 * const fs = require('fs')
 *
 * const content = 'Some content!'
 *
 * try {
 *   const data = fs.writeFileSync('/Users/joe/test.txt', content)
 *     //file written successfully
 *     }
 *
 *     catch (err) {
 *       console.error(err)
 *       }
 *
 * */

 
