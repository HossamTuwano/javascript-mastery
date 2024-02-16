var Gadget = function () {
    
}

Gadget.isShiny = function () {
    return 'You bet'
}

Gadget.prototype.setPrice = function (price) {
    this.price = price;
}

//  calling a staic method
Gadget.isShiny(); // 'you bet'

// createing an instance and calling method
var iphone = new Gadget();
iphone.setPrice(500);

typeof Gadget.setPrice; // 'undefined'
typeof iphone.isShiny; // 'undefined'

Gadget.prototype.isShiny = Gadget.isShiny;
iphone.isShiny() //'you bet'
