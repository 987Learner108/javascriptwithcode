let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber)

// "33" => 33
// "33ab" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)

/************************************OPERATION***********************/

let value = 3;
let negValue = -value;
//console.log(negValue);

let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");