
/**
 * this keyword ,context dependent 
 */
/* var car = {

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


car.printDescription(); // invoking using method invocation()
console.log(car.year);
console.log(car['make']); */
/* 
function first(){

    return this;
}
console.log(first()===global);// calling first from global namespace
 */
// this is node's global object 
// becasue that's where the 
// first method was called.
/* 
function second(){

    'use strict'; // change how this keyword is bound 
    return this;

}

console.log(second()===global);
console.log(second()===undefined);
 */

 // this depends on HOW a function is called.
 // An object can be passed as the first argument to call
 // or apply and this will be bound to it.

/*  
 let myObject={value: 'My Object'};

 //value is set on the global object
 global.value= 'Global Object ';

 function third (name){
     //Returns something different depending on how we call this method
     return this.value + name;
 }

 //console.log(third()); // prints global object's value property 
 
//both call and apply allow you to explicitly set 
//what you want to represent 'this'. The difference is how addiitional 
//arguments are sent to the function. 

 console.log(third.call(myObject,': umair'));//binding to myObject 
 console.log(third.apply(myObject,[': bob']));

  */

  function fifth(){

    console.log(this.firstName + ' ' + this.lastName );
  }

  let customer1 ={

    firstName: 'bob',
    lastName: 'tabbor',
    print: fifth
  }
  let customer2 ={

    firstName: 'oliver',
    lastName: 'johnsson',
    print: fifth
  }

  customer2.print();
  customer1.print();