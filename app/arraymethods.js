
let names=['david','eddie','johnson','sarah'];
let others=['sammy','bravo','hayden','walsh'];

let lost=[4,5,6,7,8,9,0];

let febonacci=[ 1,1,2,3,5,8,13,21,34,55];

var combine=lost.concat(febonacci);
//console.log(combine.shift());
let callcombine=(combine.map((name)=>{return `Hello ${name}`}).reverse());

//console.log( callcombine);
//console.log(febonacci.join('<'));

//console.log(febonacci.pop());
//console.log(febonacci.shift());
//console.log(febonacci);
/* console.log(names);
console.log(names.sort().toString());
console.log(names.reverse());
console.log(names.lastIndexOf('david'));
 */
var filtered=combine.filter((x)=>{if (x>15) return x;});
//console.log(combine);
//console.log(filtered);

 var nameCombine=names.concat(others);
 console.log(nameCombine.sort().toLocaleString());
 nameCombine.forEach((name)=>{console.log(`Howdy ${name}`)});