'use strict';

function solve(args)
{
    var firstElementOfTheArray = args[0],
        inputLength = args.length,
        i,
        j,
        remove = [],
        elements;
    
    for(j = 0; j < inputLength; j += 1)
    {
        if(firstElementOfTheArray !== args[j])
        {
             remove.push(args[j]);
        }
    }
    
    for(elements of remove)
    {
        console.log(elements);
    }
    
}
solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);