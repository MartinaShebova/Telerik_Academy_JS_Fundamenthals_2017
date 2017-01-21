'use strict';

function solve (args)
{
    var string = args[0],
        reversedString = '',
        len = string.length - 1,
        i;
        
        for(i = len; i >= 0; i -= 1)
        {
            reversedString += string[i];
        }
        console.log(reversedString);
}
solve(['sample']);