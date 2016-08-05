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

server.register(require("inert"), () => {

    //using handler function
    server.route({
        method: "GET",
        path: "/test.png",
        handler: (request, reply) => {
            var path = Path.join(__dirname, "public/test.png");
            reply.file(path);
        }
    });
    //using file object
    server.route({
        method: "GET",
        path: "/test2.png",
        handler: {
            file: Path.join(__dirname, "public/test.png")
        }

    });
    //using directory object
    server.route({
        method: "GET",
        path: "/dir/{param*}",
        handler: {
            directory: {
                path: Path.join(__dirname, "public")
            }
        }

    });

    //start server
    server.start(() => console.log(`servet stated at ${server.info.uri}`));
});
