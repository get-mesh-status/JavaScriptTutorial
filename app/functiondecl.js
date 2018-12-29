/*function sayHello() {

    console.log('=====');
    console.log('Hello');
    console.log('=====');

}
//sayHello();
let a=sayHello;
a();
a();*/
/*function sayHello(name) {

    console.log('=====');
    console.log('Hello '+name);
    console.log('=====');

}

sayHello('bob');
sayHello('65');
sayHello('umair');

*/

function calculateTax(amount){

    let result=amount*0.0875;
    return result;
}
let tax=calculateTax(100);
console.log(tax);