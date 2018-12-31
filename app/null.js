let pattern = /xyz/;


let value = 'this is just a test';
let result = value.match(pattern);
console.log(result);
console.log(typeof result);// typeof null is object known bug in javascript

if (null === result) { console.log('no match was found'); }