// if you use ';' or not in JS it doesnt matter because JavaScript is very forgiving language.


// single line Comment

/*
 multi 
 line 
 comment
 */


// 1. ways to print in JavaScript
// alert("me"); //mostly not used in morden JavaScript
// document.write('This is a Document write')

// 2. JavaScript console API
// console.log("Hello World");
// console.log("Hello World", 10 , "another Log");
// console.warn("This is a warning")
// console.error("This is a error")
// console.clear() //to clear the console

// 3. JavaScript Variables
// what are variables? - containers to store data values
var number1 = 1;
var number2 = 2;
// console.log(number1 + number2);

// 4. Data types in JavaScript

/** at a very high level thise are two type of data types in JAvaScript
 * premitive data types: indefined, null, number, string, boolean, symbol
 * Reference data types: Arrays and Objects
 *  */ 

// numbers
var num1 = 123;
var num2 = 1.1234;

// strings
var str1 = "This is a string";
var str2 = 'This is also a string';

// objects - key value pairs
var marks = {
    ravi: 32,
    shubham: 023,
    dwij: 99.99
}
// console.log(marks);

// booleans
var a = true;
var b = false;

// console.log(a);

// undefined or null
var und = undefined;
var und1 // still this variable is undefined
// console.log(und);

var n = null;
// console.log(n);


// arrays - collectons of ________ (data)
var arr = [1,2,"Dwij",3,4,5]  //index start with 0(Zero)
// console.log(arr)
// console.log(arr[0])
// console.log(arr[2])



// Operators in JavaScript
