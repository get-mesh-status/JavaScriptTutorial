/* 
let name ='bob';
console.log(`hi ${name}`);

let sentence= `This is just some convenience provided here
    , you might never need it becasue you might save
     large text in external files and load it up here .`
 
 console.log(sentence);
 */

 function getReasonCount(){ return 2;}

 let interpolation=`Give me ${(getReasonCount()==1)?'one good reason':'a few good reasons'} to try this `;

 console.log(interpolation);
