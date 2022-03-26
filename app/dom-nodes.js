(function(){

    function incrementCounter(){

        counter=counter+1;
    }

    function updateUI(){

        const colors=[
            {name:'Alizarin',value: '#e60000'},
            {name: 'Belize Hole',value: '#2980b9'},
            {name: 'Emerald',value:'#2ecc71'},
            {name: 'Midnight Blue',value:'#2c3e50'},
            {name: 'Sun Flower',value:'#ffbf00'},
            {name: 'Pumpkin',value:'#d35400'}
        ];

        let result=document.getElementById('resultDiv');

        result.innerText=counter;

        if(counter>0){
            result.style.fontSize=counter+ 'em';
        }

        //Divide first into second,return the reminder.
        // access that element of the color array to grab the color object

        let reminder=counter%colors.length;
        result.style.color=colors[reminder].value;

        // Clear out all existing child color divs
        let colorDiv=document.getElementById('colorDiv');
        colorDiv.innerHTML ='';

        // Re add the child color divs 
        for(i=0;i<colors.length;i++){

            //creating a node dynamically with the intent of 
            //adding it to the colorDiv

            var node=document.createElement('div');
            var textnode=document.createTextNode(colors[i].name);
            node.appendChild(textnode);
            node.style.backgroundColor=colors[i].value;

            // We could have made this into a CSS style and added that to the node.classList...

            node.style.width='150px';
            node.style.height='50px';
            node.style.cssFloat='left';
            node.style.paddingLeft='10px';
            node.style.paddingTop='10px';

            if (i==reminder){
                node.style.height='45px';
                // example of adding a class to the nodes' classList
                node.classList.add('selected');

            }

            colorDiv.appendChild(node);

        }

    }

 function handleClick(){
     incrementCounter();
     updateUI();

 }

 let counter=0;
 let myButton=document.getElementById('myButton');
 myButton.addEventListener('click',function(){

incrementCounter();
updateUI();
 });

 updateUI();
})();