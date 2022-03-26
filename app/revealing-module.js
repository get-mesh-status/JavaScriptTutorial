// revealing module pattern in javascript

let counter = (function () {

    let count = 0;

    function print(message) {

        console.log(`${message} => ${count}`);
    }

    function getCount(){
        return count;
    }
    function setCount(value){count=value;}

    function incrementCount(){
        count+=1;
        print('After increment:');
       
    }

    function resetCount(){
        print('Before reset: ');
        count=0;
        print('After reset: ');
    }
    // reveals the public functions
    // clearer presentation
    //however you can accidently overwrite the property value 
    return {

        get: getCount,
        set: setCount,
        increment:  incrementCount,
        reset: resetCount
    };
})();

counter.increment();
counter.increment();
counter.increment();

//console.log(counter.value);
counter.reset();
counter.set(7);
counter.get();
console.log('counter.get() = ' + counter.get());
counter.reset();
// console.log( counter.increment());
