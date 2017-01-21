'use strict';

function solve (args)
{
    var input = args[0],
        i,
        len = input.length,
        countOpenBrackets = 0,
        countClosingBrackets = 0;

        for(i = 0; i < len; i += 1)
        {
            if(input[i] === '(')
            {
                countOpenBrackets += 1;
            }
            else if (input[i] === ')')
            {
                countClosingBrackets += 1;
            }
        }

        if(countOpenBrackets !== countClosingBrackets)
        {
            console.log('Incorrect');
        }
        else
        {
            console.log('Correct');
        }
}
solve([')(a+b))']);