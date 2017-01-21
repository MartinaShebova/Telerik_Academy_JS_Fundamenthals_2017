'use strict';

function solve (args)
{
    let number = +args[0],
    result = returnDigit(number);

    console.log(result);

    function returnDigit(num)
    {
        let lastDigit = num % 10;

        switch(lastDigit)
        {
            case 0:
                return('zero');
                
            case 1:
                return('one');
                
            case 2:
                return 'two';
            case 3:
                return('three');
                
            case 4:
                return('four');
                
            case 5:
                return('five');
                
            case 6:
                return('six');
                
            case 7:
                return('seven');
                
            case 8:
                return('eight');
                
            case 9:
                return('nine');
                
            default:
                return('Impossible!');
                
        }
    }
}
solve(['9485945']);