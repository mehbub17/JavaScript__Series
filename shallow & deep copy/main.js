
let x = 2;
let y = 4;

y+=1

console.log(x); // 2
console.log(y) // 5

// structural datatypes

let arr = [1,2,3]

let brr = arr;

console.log(arr);
console.log(brr);
brr[2] = 22; // changes the original arr as brr is referencing arr
console.log(arr) // [1,2,22]  


// primitive datatypes are immutable

let myname = "nn"

myname[0] = 'k';
console.log(myname); // prints bb coz string is immutable

myname = "kk" // this is reassignment hence it works
console.log(myname)

// structures are mutable

let num = [1,2,3,4]

num[4] = 22
console.log(num)



