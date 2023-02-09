let myArray = [113, 114, 115]

for (i = 0; i < myArray.length; i++) {
    if (myArray[i] == 113) {
        //console.log("so CA:", 113);
    } else if (myArray[i] == 114) {
        // console.log("so CH:", 114);
    } else {
        // console.log("so cuu thuong", 115);
    }

}

// bai thuc hanh
// cho 1 mang so tu nhien -> tach so chan va so le thanh 2 mang 

let myNumberArray = [12, 15, 19, 20, 23, 10, 92, 93, 11]
let evenNumber = []
let oddNumber = []

for ( let i = 0; i < myNumberArray.length; i++) {
    // % chia lay du
    if(myNumberArray[i] % 2 == 0) {
        evenNumber.push(myNumberArray[i])
    } else {
        oddNumber.push(myNumberArray[i])
    }
  
}

console.log("Mang so chan:", evenNumber);
console.log("Mang so le:", oddNumber);