let today=new Date();

let bob=new Date('December 7,1969 07:01:30');
//let bob=new Date('1969-12-07T07:01:35');
//let bob=new Date(1969, 11,07);
//let bob=new Date(1969, 11, 07,7,1,34);

var elapsedTime=today-bob;
console.log(elapsedTime);

console.log(bob.getDate());
console.log(bob.getTime());
console.log(bob.getUTCDate());
console.log(bob.getMilliseconds());
