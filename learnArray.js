let myArray = [1,"Minh",2, "Nguyen"] // mang co 4 index from 0 -> 3

console.log(myArray[1]); // print index[1] -> result "Minh"

myArray.push("Trang", "Trang"); // add 1 index for Array

myArray[4] = 3; // change value of index[4] -> from Trang to 3

// console.log('After push:',myArray);

myArray.pop()

// console.log('After pop', myArray);

myArray.splice(2,4);
console.log('After splice', myArray);