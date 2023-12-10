var scareMe = function () {
    console.log('Boo!');
    scareMe = function () {
	console.log('Double Booo!');
};
};

scareMe(); // Boo!

scareMe(); // Double Boo!

