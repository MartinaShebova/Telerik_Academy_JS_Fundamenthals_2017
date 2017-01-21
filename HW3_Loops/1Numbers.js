'use strict';

function solve (args)
{
    let number = +args[0],
        i,
        result = '';

    for(i = 1; i <= number; i += 1)
    {
        result += i + " ";
    }
    console.log(result);
}
solve(['12']);