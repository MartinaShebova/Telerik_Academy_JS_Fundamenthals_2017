'use strict';

function solve (args)
{
    let sizeOfTheArray = +args[0],
        numbers = args[1].split(' '),
        numbersCopyArray = [];

        for(let i = 0; i < sizeOfTheArray; i += 1)
        {
            numbersCopyArray[i] = +numbers[i];
        }

        function largerNeighNumber()
        {
            for(let k = 0; k < sizeOfTheArray; k += 1)
            {
                if(numbersCopyArray[k+1] > numbersCopyArray[k+2] && numbersCopyArray[k+1] > numbersCopyArray[k])
                {
                    return k+1;
                }
            }
        }
        
        let res = largerNeighNumber();
        console.log(res);
}
solve([ '6', '-26 -25 -28 31 2 27']);