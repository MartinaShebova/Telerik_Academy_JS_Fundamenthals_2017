'use strict';

function solve (args)
{
    var input = args[0],
        protocol,
        server,
        resource,
        sliceServer,
        sliceResource;

        // var firstSlashFound = input.indexOf('/', input[7]);
        // console.log(firstSlashFound);
        

        protocol = input.slice(0,4);

        server = input.slice(7, input.length);
        
        for(let i = 0; i < server.length; i += 1)
        {
            if(server[i] === '/')
            {
                sliceServer = server.slice(server[0], i);
                sliceResource = server.slice(i, server.length);
                break;
            }
        }
        

        console.log('protocol: ' + protocol);
        console.log('server: ' + sliceServer);
        console.log('resource: ' + sliceResource);
}
solve([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);