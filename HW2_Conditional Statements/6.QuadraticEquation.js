'use strict';

function solve (args)
{
    let a = +args[0],
        b = +args[1],
        c = +args[2],
        D,
        OneRealRoot,
        x1,
        x2;

        D = Math.pow(b, 2) - (4*a*c);

        OneRealRoot = -(b / (2*a));
        
        x1 = (-b + Math.sqrt(D)) / (2*a);
        x2 = (-b - Math.sqrt(D)) / (2*a);

        if(D < 0)
        {
            console.log('no real roots');
        }else if(D === 0)
        {
            console.log('x1=x2=' + OneRealRoot.toFixed(2));
        }
        else
        {
            console.log('x1=' + x1.toFixed(2) + '; ' + 'x2=' + x2.toFixed(2));
        }

}
solve(['1', '3', '-4']);

