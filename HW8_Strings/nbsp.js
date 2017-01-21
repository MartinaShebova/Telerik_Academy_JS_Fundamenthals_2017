'use strict';

function solve (args)
{
    var input = args[0],
        len = input.length,
        a;

        for(var i = 0; i < input.length; i += 1)
        {
            if(input[i] === ' ')
            {
                input = input.replace(input[i], '&nbsp;');
            }
        }

        console.log(input);
}
solve(['This text contains 4 spaces!!']);