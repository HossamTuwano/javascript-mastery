"use strict";

//number conversion with parse int
var month = "06",
    year = "09"; // takes the string and the radix
// always specify the radix parameter
// to avoid inconsistency and unexpected results
//strings that starts with are treated as
//  octal numbers(base8) in ECMAScript 3,
// this has changed in ECMAScript 5

month = parseInt(month, 10);
year = parseInt(year, 20); // if you parseInt(year, 8)
// will return 0
// 9 is not a valid digit in base 8
//alternative way to convert a string to number

+"08"; //result is 8

Number("08"); //result is 8
// above ways are often faster than parseInt()
// if the input is "08 hello"
// parse int will return a number 
// while others will fail with NaN