/* jshint esnext:true */
/* jshint node:true */
'use strict';

//Hapi reference
const Hapi = require("hapi");

//Path referernce
const Path = require("path");
//Boom referernce
const Boom = require("boom");

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

    server.ext("onPreResponse", (request, reply) => {
        let resp = request.response;
        if (!resp.isBoom) {
            return reply.continue;
        }
        reply.view("error", resp.output.payload).code(resp.output.statusCode);
    });

    //using handler function
    server.route({
        method: "GET",
        path: "/",
        handler: (request, reply) => {
            reply(Boom.badRequest());
        }
    });


    //start server
    server.start(() => console.log(`servet stated at ${server.info.uri}`));
});
