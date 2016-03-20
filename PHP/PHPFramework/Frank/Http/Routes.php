<?php

namespace Frank\Http;

use Symfony\Component\HttpFoundation\Response;

class Routes {

    public static function setRoutes($app){

        $app->map('/hello/{name}', [
            '_controller' => 'Frank\Http\Controllers\HelloController',
            "_method" => "index"
        ]);
        $app->map('/papoi', [
            '_controller' => 'Frank\Http\Controllers\PapoiController',
            "_method" => "papoi"
        ]);

        //more routes
    }
}
