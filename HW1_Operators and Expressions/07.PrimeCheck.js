'use strict';
function solve(args) {
    var num = +args[0],
        index = 2,
        PrimeNum = true;

    if (num <= 1) {
        console.log("false");
    }
    else if (num <= 3) {
        console.log("true");
    }
    else if (num % 2 === 0 || num % 3 === 0) {
        console.log("false");
    }
    else {
        while (index * index <= num) {
            if (num % index === 0) {
                PrimeNum = false;
            }

            index++;
        }
        if (PrimeNum) {
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
}