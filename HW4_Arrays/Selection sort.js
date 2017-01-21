'use strict';

function solve (args)
{
    let newArray = [],
        i,
        k,
        j,
        currentMinIndex,
        tempVariable;

    for(k = 0; k < args.length; k += 1)
    {
        newArray[k] = +args[k]; //Така се каства цял array от стрингове към числа
    }
    
    newArray = newArray.filter (function (value, index, array) { 
        return array.indexOf (value) == index;
    });

    for(i = 0; i < newArray.length - 1; i += 1)
    {
        let currentNumber    = newArray[i];
        let currentMinNumber = newArray[i+1];
        currentMinIndex = i + 1;

        for(j = i + 1; j < newArray.length; j += 1)
        {
            if(currentMinNumber > newArray[j])
            {
                currentMinNumber = newArray[j];
                currentMinIndex = j;
            }
        }

        if(newArray[i] > currentMinNumber)
        {
            //Тук правим swap на индекси + стойностите в тях
            tempVariable = newArray[i];
            newArray[i] = newArray[currentMinIndex];
            newArray[currentMinIndex] = tempVariable;
        }
    }

    for(let p = 0; p < newArray.length; p += 1)
    {
        console.log(newArray[p]);
    }
}
solve(['1001', '-50', '234', '12']);

