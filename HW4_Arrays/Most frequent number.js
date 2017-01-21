'use strict';

function solve (args)
{
    let newArray = [],
        i,
        maxSequence = 1,
        currentSequence = 1,
        currentNumber,
        previousNumber,
        neededNumber;

    for(let i = 0; i < args.length; i += 1)
    {
        newArray[i] = +args[i];
    }

    newArray.sort(function (a, b){
        return a-b;
    });

    for(i = 1; i < newArray.length; i += 1)
    {
        previousNumber = newArray[i-1];
        currentNumber = newArray[i];

        if(currentNumber === previousNumber)
        {
            currentSequence += 1;
            if(maxSequence < currentSequence)
            {
                maxSequence += 1;
                neededNumber = currentNumber;
            }
        }
        else
        {
            currentSequence = 1;
        }
    }
    console.log(neededNumber + ' (' + maxSequence + ' times)');   
}
solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);