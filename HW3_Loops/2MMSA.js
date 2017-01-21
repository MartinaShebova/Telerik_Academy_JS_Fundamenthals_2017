'use strict';

function solve (args)
{
    let min = +args[0],
        max = +args[0],
        sum = +args[0],
        len = args.length,
        average;

    for(let index = 1; index < len; index += 1)
    {
        let currentNumber = +args[index];

        if(currentNumber < min)
        {
            min = currentNumber;
        }

        if(currentNumber > max)
        {
            max = currentNumber;
        }
        sum += currentNumber;
        average = sum / len;
        
    }
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + average.toFixed(2));
}
//solve(['2', '5', '1']);
solve(['2', '-1', '4']);