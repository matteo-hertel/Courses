/* jshint esnext:true */
/* jshint node:true */
'use strict';

//Hapi reference
const Hapi = require("hapi");

//response object
const Boom = require("boom");

//Server object
const server = new Hapi.Server();
//set up connection
server.connection({
    host: "localhost",
    port: 8080
});

//set up reporters
let goodOptions = {
    reporters: [{
        reporter: require("good-console"),
        events: {
            log: "*",
            response: "*"
        }
    }]
};

//register reporters
server.register({
    register: require("good"),
    options: goodOptions
}, err => {
    //returna  string
    server.route({
        method: "GET",
        path: "/",
        handler: (request, reply) => {
            reply("hello hapi");
        }
    });
    //using parameters
    server.route({
        method: "GET",
        path: "/{name}",
        handler: (request, reply) => {
            server.log("error", "Papoi?");
            reply(`Hello, ${request.params.name}`);
        }
    });
    //using Bomm object
    server.route({
        method: "GET",
        path: "/404",
        handler: (request, reply) => {
            reply(Boom.notFound());
        }
    });
    //and error will return a 500
    server.route({
        method: "GET",
        path: "/500",
        handler: (request, reply) => {
            reply(new Error("Nope!"));
        }
    });

    //start server
    server.start(() => console.log(`servet stated at ${server.info.uri}`));
});
