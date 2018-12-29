
// DON'T DO THIS
/*
var myVariable='I am at the global scope';

// THIS TOO
var myFunction = function () {
    console.log('me too!!');
    
}*/

function one() {
    return 'one';
}

//let value = one();
//console.log(value);
//console.log(typeof one);
/*
let value= one; //variable pointing to function
console.log(value()); //method invocation using variable 
console.log(typeof one());// string ,returned  type of one()
console.log(typeof one); // function ,one is a function

*/

/*
function two() {

    return function () {

        console.log('two');
    }
}

let myFunction = two();
myFunction();

myFunction= one;
console.log(myFunction());

*/

function three() {

    return function () {
        return 'three';
    }
}

console.log(three()());