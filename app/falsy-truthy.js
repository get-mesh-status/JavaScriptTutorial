
if(false) {} else {console.log('false is falsy');}
if (null) {} else {console.log('null is falsy');}
if (undefined){} else {console.log('undefined is falsy ');}
if (0) {} else {console.log('0 is falsy ');}
if (NaN){} else {console.log('NaN is falsy');}
if(''){} else {console.log(' An empty string with single quote is falsy');}
if(""){} else {console.log(' An empty string with double quote is falsy');}

// Everything else is truthy 

if(true){ console.log('true is truthy');}
if([]){ console.log('an empty array is truthy');}
if({}){ console.log('an empty object is truthy');}
if('umair'){console.log('a non-empty string is truty');}
if(3){console.log( '+ve integers are truty');}
if(Infinity){console.log( '+ve Infinity is truty');}
if(-3.43){console.log( '-ve floats are truty');}
