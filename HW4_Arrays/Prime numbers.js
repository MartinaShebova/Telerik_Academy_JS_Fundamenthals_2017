'use strict';

function solve (args)
{
    let number = +args[0],
        i,
        isPrime;

    for (i = number; i >= 2; i -= 1) 
    {
        isPrime = true;

        for (let j = 2; j <= Math.sqrt(number); j += 1) 
        {
            if (i % j === 0) 
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) 
        {
            console.log(i);
        }
    }
    console.log(-1);
}
solve(['26']);
//array [i - 1] = i; тук си правим от числото 13 масив - 1,2,3...13