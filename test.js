var Splicer = require('./')

var str = Splicer('a b c d e')
  .splice(2, 3, 'beep')
  .splice(6, 7, 'boop')
console.log(str.toString())
console.log(str.slice(2, 8))
console.log('a b c d e'.slice(2, 8))

var str = Splicer('a b c d e')
  .splice(4, 5, 'beep')

console.log(str.slice(2, 7))
console.log(str.splice(2, 7, 'boop').toString())
