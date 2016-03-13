<?php

namespace Frank\Http;

use Symfony\Component\HttpFoundation\Response;

class Routes {

    public static function setRoutes($app){

        $app->map('/hello/{name}', function ($name) {
        		return new Response('Hello '.$name);
        	});

        //more routes
    }
}
