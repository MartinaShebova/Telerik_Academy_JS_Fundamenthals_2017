'use strict';

function solve (args)
{
    let a = +args[0],
        b = +args[1];

        if(a > b)
        {
            console.log(b + ' ' + a);
        }
        else
        {
            console.log(a + ' ' + b);
        }
}
solve(['0', '2']);
solve(['-3', '-2']);
solve(['5.5', '4.5']);