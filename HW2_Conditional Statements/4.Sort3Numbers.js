'use strict';

function solve (args)
{
    let a = +args[0],
        b = +args[1],
        c = +args[2],
        caseABC = (a >= b && a >= c) && b >= c,
        caseACB = (a >= b && a >= c) && c >= b,
        caseBAC = (b >= a && b >= c) && a >= c,
        caseBCA = (b >= a && b >= c) && c >= a,
        caseCAB = (c >= a && c >= b) && a >= b,
        caseCBA = (c >= a && c >= b) && b >= a;

        if(caseABC)
        {
            console.log(a + ' ' + b + ' ' + c);
        }else if (caseACB)
        {
            console.log(a + ' ' + c + ' ' + b);
        }
        else if(caseBAC)
        {
            console.log(b + ' ' + a + ' ' + c);
        }else if(caseBCA)
        {
            console.log(b + ' ' + c + ' ' + a);
        }else if(caseCAB)
        {
            console.log(c + ' ' + a + ' ' + b);
        }
        else
        {
            console.log(c + ' ' + b + ' ' + a);
        }
}
solve(['-1.1', '-0.5', '-0.1']);
solve(['10', '20', '30']);
