/*
// creating a function expressions 
// inline function
// function setTime taking function as an input parameter
setTimeout(function(){
    console.log(" I waited 2 seconds!!");
},200);
*/


let counter=0;
function  timeout(){
    setTimeout(function(){
        console.log("Hi "+ ++counter);
        timeout();
    },2000);
}
timeout();


//nameless function,immediately invoked 
(function(){
    console.log("Immediately Invoked Function Expression (IIFE) ");

})();