

//javascript has object in focus rather than classes
//come back to this prototype later on after learning basics 



let originalCar= {

    make:'bmw',
    model:'745li',
    year:2010
}
let newCar=Object.create(originalCar);

console.log(typeof newCar);
console.log(newCar.make);
console.log(Object.getPrototypeOf(newCar));

let myPrototype=Object.getPrototypeOf(newCar);
console.log(myPrototype.make);
console.log(typeof myPrototype);
myPrototype.make='ford';
console.log(myPrototype);
console.log(newCar.make);

originalCar.doors=4;
console.log(newCar.doors); //newCar get the property from originalCar
console.log(originalCar.hasOwnProperty('doors'));

console.log(newCar.hasOwnProperty('doors'));

