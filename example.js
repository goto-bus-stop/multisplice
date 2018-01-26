var multisplice = require('./')
var dedent = require('dedent')
var astw = require('astw')

var src = dedent`
  function beep (boop) {
    boop *= baz
    console.log(boop)
  }
  var baz = 10
  beep(17)
`

var splicer = multisplice(src)
var renames = {}
var nextName = 'a'.charCodeAt()
astw(src)(function (node) {
  if (node.type === 'Identifier') {
    if (!renames[node.name]) renames[node.name] = String.fromCharCode(nextName++)

    splicer.splice(node.start, node.end, renames[node.name])
  }
})

console.log(splicer.toString())
