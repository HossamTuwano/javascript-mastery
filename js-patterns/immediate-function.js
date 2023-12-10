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

