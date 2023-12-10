var setup = function () {
    console.log(1);
    return function () {
	console.log(2);
    };
};

// using the setup function
var my = setup(); // logs 1
my(); // logs 2

// the setup wraps the returned function
// this creates a closure
// and you can use this closure to store private data
// which is accessible by the returned fn
// but not outside the code

var setup2 = function () {
    var count = 0;
    return function () {
	console.log(count += 1);
    };
};

// usage
var next = setup2();
next(); // returns 1
next(); // 2
next(); // 3
