'use strict';

function solve(args) {
    var x =  +args[0],
          y =  +args[1],
          radius = 2,
          distanceCenter,
          distance;

    distance = Math.pow(x, 2) + Math.pow(y, 2);
    radius = Math.pow(radius, 2);
    distanceCenter = Math.sqrt(distance);

    if (radius >= distance) {
        console.log("yes " + distanceCenter.toFixed(2));
    }
    else {
        console.log("no " + distanceCenter.toFixed(2));
    }
}
