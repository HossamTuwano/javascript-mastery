var obj = {
    cb: function () {
	console.log("hey there");
    }
}

var fn = function (cb)  {
    if(typeof obj[cb] === 'function') {
	return obj[cb];
    };
};


fn("cb");

