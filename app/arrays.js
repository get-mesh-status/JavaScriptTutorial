// Arrays in javascript 
//group of related values
let a=[3,4,5,6,8];

let nameIndex=['firstNameIndex','secondNameIndex','lastNameIndex'];
let fullName=['umair','ahmed ','shah'];
console.log("middleName = "+fullName[1]);
console.log("nameIndex for middleName= "+nameIndex[1]);
console.log(a[4]);// fourth indexed value
a[4]=54;
console.log("Array a has length:" +a['length']);
console.log(a[4]);

// understanding the length of array 
// length property return last index plus 1 . 
var cats = [];
cats[30] = ['Dusty'];
console.log("Array cats.length()="+cats.length); // 31
console.log(typeof fullName);

let singleArray=[2,"multi purpose",true];
console.log(singleArray.length);
//console.log(cats);
singleArray.push('umair');
console.log(singleArray);
