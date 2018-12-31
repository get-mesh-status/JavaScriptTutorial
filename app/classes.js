
//declaration 

class Car {

constructor(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    
    console.log('inside the Car::constructor');
    //console.log(`${ this.make} ${this.model} (${this.year})`);

}

print(){
    console.log(`${ this.make} ${this.model} (${this.year})`);

}
}

//expression 
//let car =class {}

//let myCar=new Car('bmw','745li',2010);//object instance passed to Constructor method

//myCar.print();

class SportsCar extends Car {

    revEngine(){
        console.log('Vrrrooommmm goes the ' + this.model);
    }
}

let mySportsCar=new SportsCar('dodge','viper',2011);
mySportsCar.print();
mySportsCar.revEngine();

