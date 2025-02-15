
// partial currying
const curry_mul = x=>y=>x*y;
const curry_add = x=>y=>x+y;
const curry_sub = x=>y=>x-y;

const mul5 = curry_mul(5);
const add5 = curry_add(5);

console.log(mul5(3)); // 15

console.log(add5(mul5(3))); // 20