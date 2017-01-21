'use strict';

function solve (args)
{
    let sizeOfTheArray = +args[0],
        numbers = args[1].split(' '),
        numbersCopyArray = [],
        wantedNumber = +args[2],
        result;

        for(let i = 0; i < sizeOfTheArray; i += 1)
        {
            numbersCopyArray[i] = +numbers[i];
        }

        function countNumberAppearance(number)
        {
            let counter = 0;

            for(let k = 0; k < sizeOfTheArray; k += 1)
            {
                if(numbersCopyArray[k] === number)
                {
                    counter += 1;
                }
            }
            return counter;
        }

        result = countNumberAppearance(wantedNumber);
        console.log(result);
}
solve([ '8', '28 6 21 6 -7856 73 73 -56', '73' ]);