// declair string

let myFirstName = " Nguyen ";

let myLastName = "Minh";

myStringlengt = myFirstName.length

// console.log(myStringlengt);

// concat link 2 strings and trim myFirstName

myFullName = myFirstName.trim().concat(myLastName);

//console.log(myFullName);

// delete space = trim()
//myFinalString = myFullName.trim()
console.log(myFullName);
console.log("--------------------------------------------");



// split String
let newLongString = "Hello tao la Minh Nguyen";

myNewSplitString = newLongString.split(""); // "" se split tung character and add in one Array
myNewSplitString_2 = newLongString.split("tao") // delete "tao" from String and add in one Array

console.log(myNewSplitString);
console.log(myNewSplitString_2);
console.log("--------------------------------------------");

// indexOf

myIndexOfMinh = newLongString.indexOf("Minh");
console.log(myIndexOfMinh);