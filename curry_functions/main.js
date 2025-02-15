


const mul = (x,y)=>x*y;

const curry_mul = x=>y=>x*y;


console.log(mul(2,3));
console.log(curry_mul(2)(3));