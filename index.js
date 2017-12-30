module.exports = function Splicer (str) {
  var splices = []
  return { splice: splice, toString: toString }

  function splice (start, end, value) {
    splices.push({ start: start, end: end, value: value })
  }

  function toString () {
    var result = ''
    var last = 0
    for (var i = 0; i < splices.length; i++) {
      var sp = splices[i]
      // console.log('start', JSON.stringify(str.slice(last, sp.start)), 'value', JSON.stringify(sp.value))
      result += str.slice(last, sp.start) + sp.value
      last = sp.end
    }
    // console.log('end', JSON.stringify(str.slice(last)))
    return result + str.slice(last)
  }
}
