/**
 * 
 * closures
 */

function sayHello(name) {

    return function () {
        console.log('Howdy !! ' + name);
    }
}

let bob =sayHello('small bob');
let conrad= sayHello('conrad');

console.log(typeof bob);
conrad();
bob();