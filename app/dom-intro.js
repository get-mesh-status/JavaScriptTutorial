(function (){

    function clickHandler(message) {
        
        console.log("Hi .." + message);
        
    }

    // get a reference to myButton 

    let myButton=document.getElementById('myButton');
    myButton.addEventListener('click',function(){clickHandler('clickHandler is run')});
})();