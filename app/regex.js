
let pattern =/xyz/;
//console.log(pattern);
//console.log(typeof pattern);

let value='this is xyz a test';

console.log(pattern.test(value));

console.log(value.search(pattern));

console.log(value.replace(pattern,'just'));
console.log(value);