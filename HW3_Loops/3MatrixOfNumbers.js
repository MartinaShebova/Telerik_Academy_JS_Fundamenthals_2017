'use strict';

function solve (args)
{
    let number = +args[0],
    i,
    j,
    result = '';

    for(i = 1; i <= number; i += 1)
    {
        result += i + " ";
        for(j = 1; j < number; j += 1)
        {
            result += j + i +' ';
        }
        console.log(result);
        result = '';
    }
}
solve(['4']);