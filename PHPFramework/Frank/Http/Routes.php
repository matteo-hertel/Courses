<?php

namespace Frank\Http;

use Symfony\Component\HttpFoundation\Response;

class Routes {

    public static function setRoutes($app){

        $app->map('/hello/{name}', [
            '_controller' => 'Frank\Http\Controllers\HelloController',
            "_method" => "index"
        ]);

        //more routes
    }
}
