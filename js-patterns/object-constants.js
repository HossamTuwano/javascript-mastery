// there are no constants in js
// for convention sake it is advised to use uppercase
// when naming variable that won't change

// constructor
var Widget = function () {
  // implementation
  var MAX_WIDTH = function () {}
  var MAX_WIDTH = function () {}
}

// constants
Widget.MAX_WIDTH = 320
Widget.MAX_HEIGHT = 480

var constant = (function () {
  var constants = {},
    ownProp = Object.prototype.hasOwnProperty,
    allowed = { string: 1, number: 1, boolean: 1 },
    prefix = (Math.random() + '_').slice(2)
  return {
    set: function (name, value) {
      if (this.isDefined(name)) {
        return false
      }
      if (!ownProp.call(allowed, typeof value)) {
        return false
      }
      constants[prefix + name] = value
      return true
    },
    isDefined: function (name) {
      return ownProp.call(constants, prefix + name)
    },
    get: function (name) {
      if (this.isDefined(name)) {
        return constants[prefix + name];
      }
      return null
    },
  }
})()
