(function () {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	today = new Date();
    msg = 'Today is ' + days[today.getDay()] + ', ' + today.getDate();
    console.log(msg);
}()); //

