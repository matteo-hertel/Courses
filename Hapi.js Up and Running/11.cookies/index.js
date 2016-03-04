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

//cookie config
server.state("hello", {
    ttl: 60 * 60 * 1000,
    isHttpOnly: true,
    encoding: "iron",
    password: "A8sQPDrH8zSCN0cdSyReN7RArX2fRcA8sQPDrH8zSCN0cdSyReN7RArX2fRc"
});

//using handler function
server.route({
    method: "GET",
    path: "/",
    config: {
        handler: (request, reply) => {
            let hello = request.state.hello.msg;
            reply(`Cookies, ${hello}`)
                .state("hello", {
                    msg: "Papoi?"
                });
        }
    }
});


//start server
server.start(() => console.log(`servet stated at ${server.info.uri}`));
