'use strict';

function solve(args) {
    let number = Number(+args[0]).toString(2);
    let finalResult = parseInt(number/100)%10;
    console.log(finalResult);
}
solve(['0']);
solve([ '1024' ]);