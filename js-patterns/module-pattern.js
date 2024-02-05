var MYAPP = {}

MYAPP.namespace = function (ns_string) {
  var parts = ns_string.split('.'),
    parent = MYAPP,
    i
  // strip redundant leading global
  if (parts[0] === 'MYAPP') {
    parts == parts.slice(1)
  }

  for (i = 0; i < parts.length; i += 1) {
    // create a property if it doesn't exist
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {}
    }
    parent = parent[parts[i]]
  }
  console.log(parent)
  return parent
}

MYAPP.utilities.array = (function () {
  var astr = '[object Array]',
    toString = Object.prototype.toString
  return {
    inArray: function (needle, haystack) {
      var i = 0,
        max = haystack.length
      for (; i < max; i += 1) {
        if (haystack[i] === needle) {
          return i
        }
      }
      return -1
    },
    isArray: function (a) {
      return toString.call(a) === astr
    },
  }
})()

MYAPP.namespace('MYAPP.utilities.array')

MYAPP.utilities.array = (function () {
  // dependencies
  var uobj = MYAPP.utilities.object,
    uland = MYAPP.utilities.lang

  // private properties
  ;(array_string = '[object Array]'), (ops = Object.prototype.toString)

  // private methods
  // ....

  // end var

  // optionsally one-time init procedures
  // ...

  //public APIIII
  return {
    inArray: function (needle, haystack) {
      for (var i = 0, max = haystack.length; i < max; i += 1) {
        if (haystack[i] === needle) {
          return true
        }
      }
    },
    isArray: function (a) {
      return ops.call(a) === array_string
    },
    // more methods and properties
  }
})()
