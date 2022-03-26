
// object literals, i.e. we literally created a car object.
// name,value pairs separated by , and in between name and value we have : separator
let car = {

    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function () {
        // perform some calc
        return 5000;
    },
    printDescription: function () {

        console.log(this.make + ': ' + this.model);
    }
}

// a feature of javascript ,dynamically typed we can add new properies on the go
car.condition = function () {
    if (this.year >= 2010)
        return 'new'
    else return 'old'
}
car.printDescription();
console.log(car.year);
console.log(car['make']);
console.log(car.condition());
