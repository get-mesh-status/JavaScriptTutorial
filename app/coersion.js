let a=6;
let b='5';
b=parseInt(b);
let c=a+b;
console.log('Answer:' + c); //Answer:65 concatenating if not parseInt(b)

let d=parseInt('bob',10);
let e=isNaN(d);
console.log(d);
console.log(e);