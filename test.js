var Splicer = require('./')

var str = Splicer('a b c d e')
  .splice(2, 3, 'beep')
  .splice(6, 7, 'boop')
console.log(str.toString())
console.log(str.slice(2, 8))
console.log('a b c d e'.slice(2, 8))
