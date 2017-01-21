'use strict';

function solve (args)
{
    var input = args[0],
        upcase = '<upcase>',
        upcaseClosing = '</upcase>',
        startingIndex = 0;

        var upCaseFirstFound = input.indexOf(upcase, startingIndex);

        var upCaseTagLength = upCaseFirstFound + upcase.length;

        console.log(upCaseTagLength);

        var upCaseClosingFirstFound = input.indexOf(upcaseClosing, upCaseTagLength);

        var result = input.substring(upCaseTagLength, upCaseClosingFirstFound);

        console.log(result.toUpperCase());
        
        
}
solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);