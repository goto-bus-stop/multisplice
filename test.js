var Splicer = require('./')

var str = Splicer('a b c d e')
str.splice(2, 3, 'beep')
str.splice(6, 7, 'boop')
console.log(str.toString())
