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

server.ext("onRequest", (request, reply) => {
    console.log("onRequest");
    reply.continue(); //to continue
});
//Auth
server.ext("onPreAuth", (request, reply) => {
    console.log("onPreAuth");
    reply.continue();
});
server.ext("onPostAuth", (request, reply) => {
    console.log("onPostAuth");
    reply.continue();
});

//handler
server.ext("onPreHandler", (request, reply) => {
    console.log("onPreHandler");
    reply.continue();
});
server.ext("onPostHandler", (request, reply) => {
    console.log("onPostHandler");
    reply.continue();
});
server.ext("onPreResponse", (request, reply) => {
    console.log("onPreResponse");
    reply.continue();
});


//using handler function
server.route({
    method: "GET",
    path: "/",
    handler: (request, reply) => {
        console.log("handler");
        reply("papoi");
    }
});


//start server
server.start(() => console.log(`servet stated at ${server.info.uri}`));
