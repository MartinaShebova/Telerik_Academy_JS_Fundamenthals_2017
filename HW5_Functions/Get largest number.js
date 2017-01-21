'use strict';

function solve (numbers)
{
    let nums = numbers[0].split(' '),
        n1 = +nums[0],
        n2 = +nums[1],
        n3 = +nums[2],
        currentMax,
        result;

    currentMax = GetMax(n1,n2);
    result = GetMax(currentMax, n3);
    
    console.log(result);

    function GetMax(first, second)
    {
        if(first >= second)
        {
            return first;
        }
        else
        {
            return second;
        }
    }
}
solve(['7 19 19']);