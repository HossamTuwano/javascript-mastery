// js has no implementation of private, public, or protected methods
// all objects are public
// although language has no implementaion for these methods you can implement
// them using a closure in a constructor

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
