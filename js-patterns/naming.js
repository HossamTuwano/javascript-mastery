// use trailing undescore to mean private,
//  as name_ and getElement_

// use one prefix underscore for _protected
// and two for __private

var person = {
  getName: function () {
    return this._getFirst + " " + this._getLast();
  },
//   private
  _getFirst: function () {
    //...
  },
  _getLast: function () {
    //
  },
};
