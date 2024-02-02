// js has no implementation of private, public, or protected methods
// all objects are public
// although language has no implementaion for these methods you can implement
// them using a closure in a constructor

//private members
function Gadget() {
  // private member
  var name = 'iPod'
  // public function
  this.getName = function () {
    return name
  }
}

var toy = new Gadget()

// `name` is undefined, it's private
console.log(toy.name) // undefined

// public method has access to `name`
console.log(toy.getName()) // "iPod"

// Privilaged members
// there is no syntax to express privilaged members rather than
// it is a term given to the public method getName
// because it has a special accest to the private member name

// privacy failures
// when accessing the privileged method that return a private member
// when that member is and object or an array the consumer can choose
// to modify the properties of the private member

function Gadget2() {
  // private member
  var specs = {
    screen_width: 320,
    screen_height: 480,
    color: 'white',
  }
  // public function
  this.getSpecs = function () {
    return specs
  }
}

var toy = new Gadget(),
  specs = toy.getSpecs()

specs.color = 'black'
specs.price = 'free'

console.dir(toy.getSpecs())

// privilaged private object literals
// implement private and privilaged methods on object literals instead of function

var myobj //the object
;(function () {
  var name = 'my, oh my'
  // notice no var
  myobj = {
    getName: function () {
      return name
    },
  }
})()
myobj.getName() // 'my oh my'

// alternative implementation

var myobj2 = (function () {
  var name = 'my, oh my'

  return {
    getName: function () {
      return name
    },
  }
})()

myobj2.getName() // 'my, oh my'

// prototype and privacy

Gadget.prototype = (function () {
  // provate members
  var browser = 'Mobile Webkit'
  // public prototype member
  return {
    getBrowser: function () {
      return browser
    },
  }
})()

var toy = new Gadget()
console.log(toy.getName()) // privileged "own" method
console.log(toy.getBrowser()) // privileged prototype method

//revealing private functions as public methods
var myarray
;(function () {
  var astr = '[object Array]',
    toString = Object.prototype.toString

  function isArray(a) {
    return toString.call(a) === astr
  }

  function indexOf(haystack, needle) {
    var i = 0,
      max = haystack.length
    for (; i < max; i += 1) {
      if (haystack[i] === needle) {
        return i
      }
    }
    return -1
  }

  myarray = {
    isArray: isArray,
    indexOf: indexOf,
    inArray: indexOf,
  }
})()


myarray.isArray([1,2]); // true
myarray.isArray({0: 1}); // false
myarray.indexOf(["a", "b", "z"], "z"); // 2
myarray.inArray(["a", "b", "z"], "z"); // 2