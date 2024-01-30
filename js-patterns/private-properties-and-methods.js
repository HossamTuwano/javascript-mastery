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


