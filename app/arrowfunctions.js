/* 
let hi=() => {console.log('Howdy');}
hi();

 */
/* 
 let hi =  (name)=> {console.log(`Howdy ${name}`);}
 hi('umair');
 */
/* 
 let add=(a,b) => {return a + b }
 console.log(add(5,6));

  */
/* 
  let names=['david','eddie','alex','micahel'];
  names.map((name)=>{console.log(`Howdy ${name}`)});

   */
/* 
  let names=['david','eddie','alex','micahel'];
let i=0;
  names.map((name)=>{i++;console.log(`Howdy ${name} ${i}`);});

   */
let names=['david','eddie','alex','micahel'];
 var transformed=names.map((name)=>{return `Howdy ${name} !!`});
 console.log(typeof transformed);
 console.log(transformed.reverse());
