'use strict';

function solve (args)
{
    let newArray = [],
        i,
        maxSequence = 1,
        currentSequence = 1,
        currentNumber,
        previousNumber;

    for(let i = 0; i < args.length; i += 1)
    {
        newArray[i] = +args[i];
    }

    for(i = 1; i < newArray.length; i += 1)
    {
        previousNumber = newArray[i-1];
        currentNumber = newArray[i];

        if(currentNumber > previousNumber)
        {
            currentSequence += 1;
            if(maxSequence < currentSequence)
            {
                maxSequence += 1;
            }
        }
        else
        {
            currentSequence = 1;
        }
    }
    console.log(maxSequence);   
}
solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);