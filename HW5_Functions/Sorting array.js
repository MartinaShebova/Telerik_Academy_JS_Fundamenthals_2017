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

        function sortArrayOfNumbers()
        {
            numbersCopyArray.sort(function(a, b){
                return a-b;
            });
            return numbersCopyArray.join(' ');
        }
        console.log(sortArrayOfNumbers());
}
solve([ '6', '3 4 1 5 2 6']);