(function () {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	today = new Date();
    msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
    console.log(msg);
}()); // Today is

// Adding parameters

(function (who, when) {
    console.log('I met ' + who + ' on ' + when);
}('Sirius Back', new Date()))

// passing global so that
// it's accessinble inside the fn
// without having to pass window

//(function (global) {
    // access the global object via 'global'
//}(this));


// returned values from immediate function

var result = (function () {
    return 2 + 2;
}());

result;

// storing returned value
// in a function closure

var getResult = (function () {
    var res = 2 + 2;
    return function () {
	return res;
    }
}())

getResult();

// immediate function inside an object

var o = {
    message: (function () {
	var who = 'me',
	    what = 'call';
	return what  + ' ' + who;
    }()),
    getMsg: function () {
	return this.message;
    }
};

// usage

o.getMsg();
o.message;
