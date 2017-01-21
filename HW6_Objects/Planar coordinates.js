'use strict';

function solve(args)
{
    var lineOne = [],
        lineTwo = [],
        lineThree = [],
        calculate,
        i,
        j,
        k,
        sliceSecondArray,
        sliceThirdArray,
        res1,
        res2,
        res3;

        for(i = 0; i < args.length - 8; i += 1)
        {
            lineOne[i] = +args[i];
        }

        for(j = 4; j < args.length - 4; j += 1)
        {
            lineTwo[j] = +args[j];
        }
        
        sliceSecondArray = lineTwo.slice(4,8);

        for(k = 7; k < args.length; k += 1)
        {
            lineThree[k] = +args[k];
        }

        sliceThirdArray = lineThree.slice(8, 13);

        function calculateDistance (x1, y1, x2, y2)
        {
            calculate = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
            return calculate.toFixed(2);
        }

        res1 = calculateDistance(lineOne[0], lineOne[1], lineOne[2], lineOne[3]);
        res2 = calculateDistance(sliceSecondArray[0], sliceSecondArray[1], sliceSecondArray[2], sliceSecondArray[3]);
        res3 = calculateDistance(sliceThirdArray[0], sliceThirdArray[1], sliceThirdArray[2], sliceThirdArray[3]);

        console.log(res1);
        console.log(res2);
        console.log(res3);

        if(res1 + res2 > res3 || res2 + res3 > res1 || res1 + res3 > res2)
        {
            console.log('Triangle can be built');
        }
        else
        {
            console.log('Triangle can not be built');
        }
}
solve([
  '-100', '94', '7', '8',
  '1', '932839', '3', '4',
  '9', '10', '11', '12'
]);