
// string object methods of javsscript 

let first= ' Knowledge is power but sometimes power comes from action';
let second= 'Do or don\'t do anything ';
let third='4,5,3,2,5,6,44';
/* 
let mysplit=third.split(',');
console.log(mysplit);

let myslice=second.slice(3,43);
console.log(myslice);
 */
let myEndswith=first.endsWith('action');
console.log(myEndswith);
let myStartswith=first.trim().startsWith('Knowledge');//removing the white spaces from beginning and end and then checking startsWith
console.log(myStartswith);

let myInclude=second.includes('anything');
console.log(myInclude);

let myrepeat=' Ha + '.replace('+','ha').trim().repeat(4);
console.log(myrepeat);
