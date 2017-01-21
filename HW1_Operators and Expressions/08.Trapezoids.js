'use strict';

function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let height = +args[2];

    let area = ((a + b) * height) / 2;
    let finalArea = area.toFixed(7);
    console.log(finalArea);
}
solve(['100', '200', '300']);