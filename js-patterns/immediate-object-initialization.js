({
    // here you can define setting values
    // a.k.a configuring constants

    maxwidth: 600,
    maxheight: 400,

    // you can also defin utility methods

    gimmeMax: function() {
	return this.maxwidth + 'x' + this.maxheight;
    },

    // initialize
    init: function () {
	console.log(this.gimmeMax());
	// more init tasks ..
    }
}).init();
	
