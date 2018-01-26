var assert = require('assert')

module.exports = function multisplice (str) {
  assert.equal(typeof str, 'string', 'multisplice: str must be a string')

  var splices = []
  var self = { splice: splice, slice: slice, toString: toString }
  return self

  function splice (start, end, value) {
    assert.equal(typeof start, 'number', 'multisplice.splice: start must be a number')
    assert.equal(typeof end, 'number', 'multisplice.splice: end must be a number')
    assert.equal(typeof value, 'string', 'multisplice.splice: replacement value must be a string')
    assert(start >= 0, 'multisplice.splice: start must be at least 0')
    assert(end >= start, 'multisplice.splice: end must be equal to or greater than start')

    splices.push({ start: start, end: end, value: value })
    return self
  }

  function slice (start, end) {
    assert.equal(typeof start, 'number', 'multisplice.slice: start must be a number')
    if (end != null) assert.equal(typeof end, 'number', 'multisplice.slice: end must be a number')

    splices.sort(byStart)

    var result = ''
    var last = start
    for (var i = 0; i < splices.length; i++) {
      var sp = splices[i]
      if (sp.start < last) continue // ignore splices that are entirely contained in an earlier spliced range
      if (end != null) {
        if (sp.start >= end) return result + str.slice(last, end)
      }
      result += str.slice(last, sp.start) + sp.value
      last = sp.end
    }
    return result + str.slice(last, end)
  }

  function toString () {
    return slice(0)
  }
}

function byStart (a, b) {
  return a.start - b.start
}
