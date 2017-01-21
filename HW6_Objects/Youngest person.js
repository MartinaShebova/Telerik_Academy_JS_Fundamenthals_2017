'use strict';

function solve(args)
{
    var people = [];

    for(let i = 0; i < args.length; i += 3)
    {
        let person = {firstName : args[i],
                      lastName : args[i + 1],
                      age : +args[i + 2]};

        people.push(person);
    }

    var youngestPersonIndex = 0,
        youngestPersonAge = 10000;

    for(let i = 0; i < people.length; i += 1)
    {
        if(people[i].age < youngestPersonAge)
        {
            youngestPersonAge = people[i].age;
            youngestPersonIndex = i;
        }
    }
    
    console.log(people[youngestPersonIndex].firstName + ' ' + people[youngestPersonIndex].lastName);
}
solve([
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
]);