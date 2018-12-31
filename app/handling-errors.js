/* 
let a=7*undefined/'string';
console.log(a); */
/* 
function beforeTryCatch(){

    let obj=undefined;
    console.log(obj.a);
    console.log('If the previous line of code runs you will never see this !!');
}
//beforeTryCatch();

function afterTryCatch(){

    try {
    let obj=undefined;
    console.log(obj.a);
    console.log('If the previous line of code runs you will never see this !!');


    } catch (error) {
        console.log('I caught an exception !!'+ ' '+ error.message+ '');
    }
    finally{
        console.log('This will run ,no matter what !!');
    }

    console.log('My applicatino is still running!!');
}

afterTryCatch(); 

*/

function performCalculation(obj) {
if(!obj.hasOwnProperty('b'))
{
    throw new Error('Object missing property');

}
// continue with calculation 
return 4;
}

function performHigherLevelCalucation(){

    let obj={};
    let value=0;
    try{
        value=performCalculation(obj);

    }
    catch(error){
        console.log(error.message);
    }

    if(value==0){
        //retry logic
    }
}

performHigherLevelCalucation();