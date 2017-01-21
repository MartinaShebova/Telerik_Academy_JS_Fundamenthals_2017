'use strict';

function solve (args)
{
    var searchingWord = args[0].toLowerCase(),
        searcningSentence = args[1].toLowerCase(),
        counter = 0,
        startingIndex = 0;

        var currentIndex = searcningSentence.indexOf(searchingWord, startingIndex);
        
        while(currentIndex >= 0)
        {
            counter += 1;
            currentIndex = searcningSentence.indexOf(searchingWord, currentIndex + 1);
        }

        console.log(counter);

}
solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);