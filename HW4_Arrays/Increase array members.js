'use strict';

function solve (args)
{
    let i,
        newArray = [],
        number = +args[0];
        
    for(i = 0; i < number; i += 1)
    {
        newArray[i] = i  * 5;
    }

    for(let j = 0; j < newArray.length; j += 1)
    {
        console.log(newArray[j]);
    }
}
solve(['5']);