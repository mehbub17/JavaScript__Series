
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



// pure function requires you to avoid
// mutating the data

// impure function that mutates the data

const addSecond = (arr,brr) =>{
    arr.push(brr); // mutates the original array
    return arr;
}

const arr1 = [1,2,3]; // can't reassign the array but change the array
console.log(addSecond(arr1,4)) // [1,2,3,4]

// const does not make it immutable as it structural datatype


console.log('-----------------------------------------------------------------------------------------------')

// Shallow copy vs deep copy

//shallow copy

// with spread operator

const arr2 = [...arr1,5] // spread operator

console.log(arr1); //[1,2,3,4]
console.log(arr2) //[1,2,3,4,5]

console.log(arr1 == arr2) // false


// with Object.assign() 

const arr3 = Object.assign([],arr1)
console.log(arr1)
console.log(arr3)
console.log(arr1 === arr3) // false as memory location is different
// independent clone
 arr3.push(5)
 console.log(arr1) //[1,2,3,4]
 console.log(arr3) // [1,2,3,4,5]

 // when using nested arrays or objects are there then nested structural data types shares the memory  or reference 

 arr1.push([1,2]);
 console.log(arr1) // [ 1, 2, 3, 4, [ 1, 2 ] ]
// using spread operator
 const arr4 = [...arr1]
 
 arr4[4].push(3)
 console.log(arr1) // [ 1, 2, 3, 4, [ 1, 2 ,3] ]
 console.log(arr4)//[ 1, 2, 3, 4, [ 1, 2 ,3] ]

// as nested part shares the same memory location
// it is a problem 

// this is a problem that shallow copy shares memory in deep level ie in nested part

