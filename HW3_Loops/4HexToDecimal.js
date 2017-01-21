'use strict';

function solve (args)
{
    let number = args[0];
    // convert hexadecimal (string) to decimal
    let res = parseInt(number, 16);
    console.log(res);
}
solve(['FE']);
solve(['1AE3']);
solve(['4ED528CBB4']);