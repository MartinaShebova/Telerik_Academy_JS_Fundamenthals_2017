function solve(args) {
    let number = +args[0];
    let result = parseInt(number/100)%10;
    if( result === 7)
    {
        console.log(true);
    }
    else
    {
        console.log(false + ' ' + result);
    }
}
solve(['701']);
solve(['9703']);
solve(['877']);
solve(['777877']);
solve(['9999799']);
