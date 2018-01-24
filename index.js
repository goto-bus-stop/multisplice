module.exports = function Splicer (str) {
  var splices = []
  var self = { splice: splice, slice: slice, toString: toString }
  return self

  function splice (start, end, value) {
    splices.push({ start: start, end: end, value: value })
    return self
  }

  function slice (start, end) {
    var result = ''
    var last = start
    for (var i = 0; i < splices.length; i++) {
      var sp = splices[i]
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
