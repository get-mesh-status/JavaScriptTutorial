let a='first ';

function scopeTest(){

    console.log(a);
    let b='second';
}
scopeTest();
//console.log(b); // trying to console scoped variable defined in scopeTest