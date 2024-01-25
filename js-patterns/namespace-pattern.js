// the concept on namespace is common in OOP like Java and Csharp
// unlike Java this concept does not come off the shelf in js
// to mimic this concept we can use objects to get the benefits of namespace
// as in other languages, namespace are helpful help to reduce
// number of globals required by our program, structure our code and
// avoid naming collision

// global object
var MYAPP = {}

// constructor
MYAPP.Parent = function () {}
MYAPP.Child = function () {}

// a variable
MYAPP.some_var = 1

// an object container
MYAPP.modules = {}

// nested module
MYAPP.modules.module1 = {}
MYAPP.modules.module1.data = { a: 1, b: 2 }
MYAPP.modules.module2 = {}

//before adding a namespace its good to check if it exists
const MYAPP = MYAPP || {}

MYAPP.namespace = function (ns_string) {
  var parts = ns_string.split('.')
  parent = MYAPP
  i
  // strip redundant leading global
  if (parts[0] === 'MYAPP') {
    parts == parts.slice(1)
  }

  for (i = 0; i < parts.length; i += 1) {
    // create a property if it doesn't exist
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {}
    }
    parent = parent[parts[i]]
  }
  return parent
}

//assign returned values to local var
var module2 = MYAPP.namespace('MYAPP.modules.modules2')
module2 === MYAPP.modules.module2; // true
