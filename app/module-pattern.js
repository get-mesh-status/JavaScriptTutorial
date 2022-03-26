var counter = (function () {

    // console.log('IIFE');

    // private stuff 
    let count = 0;

    function print(message) {

        console.log(message + ' :: ' + count);
    }

    // return an object 
    return {

        //value: count,
        get: function () {

            return count;
        },
        set: function (value) { count = value; print('count set ')},

        increment: function () {
            count += 1;
            print('after increment');

        },
        reset: function () {
            print('before reset !!');
            count = 0;
            print('after reset ...');

        }
    }
})();

counter.increment();
counter.increment();
counter.increment();

//console.log(counter.value);
counter.reset();
counter.set(7);
console.log('counter.get() = ' + counter.get());
counter.reset();
// console.log( counter.increment());
