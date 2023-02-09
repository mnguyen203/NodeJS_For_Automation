// Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
// Thêm “Rock-n-Roll” vào cuối.
// Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
// Tách giá trị đầu tiên của mảng và hiển thị nó.
// Thêm trước Rap và Reggae vào mảng.

// let stylesArray = ["Jazz","Blues"]
// console.log(stylesArray);

// stylesArray.push("Rock-n-Roll")
// console.log(stylesArray);

// stylesArray [Math.floor((stylesArray.length - 1) / 2)] = "Classics"; // find midle element in Array and replace with new string
// console.log(stylesArray);

// stylesArray.shift("Jazz") // xoa 1st element
// console.log(stylesArray);

// stylesArray.unshift("Rap","Reggae") // insert 2 element in the first of array
// console.log(stylesArray);

// Sắp xếp mảng giảm dần

let arr = [5, 2, 1, -10, 8];
let arrSort = [];

for (let i = 0; i < arr.length; i++) {
   if(arr[i] < arr[i++]) {
    arrSort.push(arr[i])
    console.log("----------",arr[i]);
   } else {
    console.log(arr[i++]);
   }
    //console.log(arr[i]);
    
}

console.log("---------",arrSort);