const Person = function (name) {
  this.name = name;
  this.say = function () {
    console.log("My name is " + this.name);
  };
};

const batman = new Person("Batman");

batman.say();

// what happened?
//  the new constructor create an object
// this = {}
// then adds properties to this object
/*
 this = {
    name = 'hossam';
    say = function () {
        return ''
    }
 }
*/

// this is obviously ineficient because 
// every time you call new Person()
// a new fn is created but say() method stays the sam
// from one instance to the next
// better  option is to the method to prototype of Person


Person.prototype.say = function () {
    return "I am " + this.name;
};