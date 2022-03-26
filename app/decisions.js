// if expressions 
/*
let count = 43;
if (count == 4) {
    console.log("Count is 4");
} else if (count > 4) {
    console.log("Count is greater than  4");
} else if (count < 4) {
    console.log("Count is less than 4");
}
else {
    console.log("Count is not 4 ");

}*/
/*
let currentDay = new Date().getDay();
let day;
console.log("CurrentDay= " + currentDay);

function printCurrentDay(newday) {
    switch (newday) {

        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
        case 5:
            day = 'Friday';
        case 6:
            day = 'Saturday';
            break;
        default:
            day = 'Sunday';
            console.log("enjoy the weekend!!");


    }
    console.log("Today is " + day);
}
printCurrentDay(new Date().getDay());
//console.log(new Date().getTime());
*/

//ternary operator

let a=2,b='2';
let result=(a===b)?'equal':'inequal'; // treating '2' as string
// strict equality
//console.log((a==b)?'equal':'inequal');
console.log(result);