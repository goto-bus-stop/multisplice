var test = require('tape')
var Splicer = require('./')

test('splice multiple things using original indices', function (t) {
  var str = Splicer('a b c d e')
    .splice(2, 3, 'beep')
    .splice(6, 7, 'boop')

  t.equal(str.toString(), 'a beep c boop e')
  t.end()
})

test('slice part of a spliced string using original indices', function (t) {
  var str = Splicer('a b c d e')
    .splice(2, 3, 'beep')
    .splice(6, 7, 'boop')

  t.equal(str.slice(2, 5), 'beep c')
  t.end()
})
