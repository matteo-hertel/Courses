/* jshint esnext:true */
/* jshint node:true */
'use strict';

//Hapi reference
const Hapi = require("hapi");

//Server object
const server = new Hapi.Server();
//set up connection
server.connection({
    port: 8080
});

//using handler function
server.route({
    method: ["POST", "PUT"],
    path: "/",
    config: {
        payload: {
            output: "data",
            parse: true

        }
    },
    handler: (request, reply) => {
        reply(request.payload);
    }
});


//start server
server.start(() => console.log(`servet stated at ${server.info.uri}`));
