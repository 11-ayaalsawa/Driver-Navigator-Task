'use strict'


//Write a JavaScript function that return the sort array decending
//Example x = 2904;
//Expected Output : 9420


function decend(array) 
{
for (let s = 0; s < array.length; s++)
 {
    for (let i = 0; i < array.length; i++)
    {
       if (array[s]<array[i]) 
       {
           let max =array[s]
           array[s] = array[i]
           array[i] = max;
       };
    };
    
 };
 return array;
}

document.getElementById("task3").innerHTML=decend(array);