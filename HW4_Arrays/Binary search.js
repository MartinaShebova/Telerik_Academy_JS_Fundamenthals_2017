'use strict';

function solve (args)
{
    let newArray = [],
        i,
        isFound = false;

    for(let i = 0; i < args.length; i += 1)
    {
        newArray[i] = +args[i];
    }

    let numberX = +args[args.length - 1];


    newArray.sort(function (a, b){
        return a-b;
    });

    for(i = 0; i < newArray.length; i += 1)
    {
        if(numberX === newArray[i])
        {
            console.log(i);
            isFound = true;
            break;
        }

    }
    if(!isFound)
    {
        console.log('-1');
    }
}
solve(['1', '1']);