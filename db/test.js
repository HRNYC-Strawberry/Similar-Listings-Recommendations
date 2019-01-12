const fs = require('file-system')

var stream = fs.createWriteStream('test.txt');
var i = 100000000;
while(i > 0) {
  stream.write('hello world')
  i--;
}

stream.once('drain', () => {
  console.log('drain')
})

// stream.on('done', () => {
//   stream.write('keep writing', () => {
//     stream.emit('done')
//   })
// })

// stream.write('writing and writing', () => {
//   stream.emit('done')
// })