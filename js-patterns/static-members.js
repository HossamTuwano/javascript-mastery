var Gadget = function () {}

Gadget.isShiny = function () {
  return 'You bet'
}

Gadget.prototype.setPrice = function (price) {
  this.price = price
}

//  calling a staic method
Gadget.isShiny() // 'you bet'

// createing an instance and calling method
var iphone = new Gadget()
iphone.setPrice(500)

typeof Gadget.setPrice // 'undefined'
typeof iphone.isShiny // 'undefined'

Gadget.prototype.isShiny = Gadget.isShiny
iphone.isShiny() //'you bet'

// constructor
var Gadget = function (price) {
  this.price = price
}

// a static method
Gadget.isShiny = function () {
  // this always works
  var msg = 'you bet'
  if (this instanceof Gadget) {
    // this works if only called statically
    msg += ', it costs $' + this.price + '!'
  }

  return msg
}

// a normal method added to the prototype
Gadget.prototype.isShiny = function () {
  return Gadget.isShiny.call(this)
}

Gadget.isShiny() // "you bet"

var a = new Gadget('499.99');
a.isShiny(); // "you bet, it costs $499.99!"