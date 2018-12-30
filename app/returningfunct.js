
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
//console.log(one());
/*
let value= one; //variable pointing to function
console.log(value()); //method invocation using variable 
console.log(typeof one());// string ,returned  type of one()
console.log(typeof one); // function ,one is a function

*/


function two() {

    // function expression inside a function,nameless function
    return function () {

        console.log('two');
    }
}

let myFunction = two();//myFunction is referencing the inner function                                   //expression inside two()

myFunction(); // invoking the function by using mehtod invocation ();

//myFunction= one;
//console.log(myFunction());
//console.log( myFunction);


/* function three() {

    return function () { // returning a functino expression which in turn returns a string 
        return 'three';
    }
}

console.log(three()()); */