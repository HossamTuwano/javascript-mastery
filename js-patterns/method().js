// constructor is chained to methods
// methods take two parameters
// method name and the implementation of the method

var Person = function (name) {
  this.name = name
}
  .method('getName', function () {
    return this.name
  })
  .method('setName', function (name) {
    this.name = name
    return this
  })

// here is how you can use Person()
// to create and use a new object

var a = new Person('Adam')
a.getName() // 'Adm'
