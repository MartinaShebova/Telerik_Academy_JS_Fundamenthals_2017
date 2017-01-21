'use strict';

function solve (args)
{
    let a = +args[0],
        b = +args[1],
        c = +args[2],
        caseA = a > b && a > c,
        caseB = b > a && b > c;

        if(caseA)
        {
            console.log(a);
        }else if (caseB)
        {
            console.log(b);
        }
        else
        {
            console.log(c);
        }
}
solve(['-0.1', '-0.5', '-1.1']);
solve(['-2', '-2', '1']);
