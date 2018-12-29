//Type of expression 
/*
//1. Variable declaration 

let z;

// 2. Assign a value ;

let s=4;
//3. perform an evaluation that return a single value 

//s+z
*/
let a=3;
let b=5;
let c=a+b; // three expressionin here;
console.log(a); //a=3
console.log(b); //b=5
c++;
console.log(c++);//9
console.log("Now c="+c);
console.log(c);

let modulus=c%a;
console.log("Modulus :"+modulus);
let multiplied=a*b;
console.log("a*b= "+multiplied);
let exponent=Math.pow(a,b);
console.log("a exponent b = a^b= "+exponent);
let exponentcalculated=a*a*a*a*a;
console.log("a exponent b calculated is :"+exponentcalculated);

if(exponent==exponentcalculated)
    console.log("exponent calculated by Math.pow is correct!! ");
