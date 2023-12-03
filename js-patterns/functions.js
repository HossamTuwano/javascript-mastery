//bad pattern
var add = new Function("a, b", "console.log(a + b)");
add(1, 2);

// named expression

var foo = function foo() {
  console.log("foo");
};

// unnamed expression

var bar = function () {
  console.log(bar);
};

// function declaration

function fooBar() {}

// function declaration can hoisted
// meaning they are always moved to the top
// so they can be used before they are declared

function hoistedFunc() {
  foo(); // 'local foo'
  bar(); // TypeError: bar is not a function

  function foo() {
    console.log("local foo");
  }

  var bar = function () {
    console.log("local bar");
  };
}

hoistedFunc()
