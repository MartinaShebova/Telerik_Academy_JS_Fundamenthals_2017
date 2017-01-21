'use strict';

function solve(args)
{
    var lineOneObject = {},
        lineTwoObject = {},
        lineThreeObject = {},
        i,
        calculate,
        res1,
        res2,
        res3;

        lineOneObject['x1'] = +args[0];
        lineOneObject['y1'] = +args[1];
        lineOneObject['x2'] = +args[2];
        lineOneObject['y2'] = +args[3];
    
        lineTwoObject['x1'] = +args[4];
        lineTwoObject['y1'] = +args[5];
        lineTwoObject['x2'] = +args[6];
        lineTwoObject['y2'] = +args[7];
    
        lineThreeObject['x1'] = +args[8];
        lineThreeObject['y1'] = +args[9];
        lineThreeObject['x2'] = +args[10];
        lineThreeObject['y2'] = +args[11];

        function calculateDistance (x1, y1, x2, y2)
        {
            calculate = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
            return calculate.toFixed(2);
        }

        res1 = calculateDistance(lineOneObject['x1'], lineOneObject['y1'], lineOneObject['x2'], lineOneObject['y2']);
        res2 = calculateDistance(lineTwoObject['x1'], lineTwoObject['y1'], lineTwoObject['x2'], lineTwoObject['y2']);
        res3 = calculateDistance(lineThreeObject['x1'], lineThreeObject['y1'], lineThreeObject['x2'], lineThreeObject['y2']);
            
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
  '5', '6', '7', '8',
  '1', '2', '3', '4',
  '9', '10', '11', '12'
]);