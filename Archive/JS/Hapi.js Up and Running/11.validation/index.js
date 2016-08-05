/* jshint esnext:true */
/* jshint node:true */
'use strict';

//Hapi reference
const Hapi = require("hapi");
//Joi reference
const Joi = require("joi");

//Server object
const server = new Hapi.Server();
//set up connection
server.connection({
    port: 8080
});

//using handler function
server.route({
    method: ["POST", "PUT"],
    path: "/user/{id?}",
    config: {
        validate: {
            params: Joi.object({
                id: Joi.number(),
            }),
            payload: Joi.object({
                id: Joi.number(),
                test: Joi.string()
            }),
            //use .unknown() to allow unknown payload items
            //.unknown(),

            query: Joi.object({
                id: Joi.number()
            })

        }
    },
    handler: (request, reply) => {
        reply({
            params: request.params,
            query: request.query,
            payload: request.payload
        });
    }
});


//start server
server.start(() => console.log(`servet stated at ${server.info.uri}`));
