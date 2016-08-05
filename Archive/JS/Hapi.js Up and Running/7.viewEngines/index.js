/* jshint esnext:true */
/* jshint node:true */
'use strict';

//Hapi reference
const Hapi = require("hapi");

//Path referernce
const Path = require("path");

//Server object
const server = new Hapi.Server();
//set up connection
server.connection({
    port: 8080
});

server.register(require("vision"), () => {

    server.views({
        engines: {
            hbs: require("handlebars")
        },
        relativeTo: __dirname,
        layout: true,
        path: "views"
    });

    //using handler function
    server.route({
        method: "GET",
        path: "/{name?}",
        handler: (request, reply) => {
            reply.view("home", {
                name: request.params.name || "papoi"
            });
        }
    });


    //start server
    server.start(() => console.log(`servet stated at ${server.info.uri}`));
});
