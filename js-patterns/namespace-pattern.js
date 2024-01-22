// the concept on namespace is common in OOP like Java and Csharp
// unlike Java this concept does not come off the shelf in js
// to mimic this concept we can use objects to get the benefits of namespace
// as in other languages, namespace are helpful help to reduce
// number of globals required by our program, structure our code and
// avoid naming collision

// global object
var MYAPP = {};

// constructor
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// a variable
MYAPP.some_var = 1;

// an object container
MYAPP.modules = {};

// nested module
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = { a: 1, b: 2 };
MYAPP.modules.module2 = {};
