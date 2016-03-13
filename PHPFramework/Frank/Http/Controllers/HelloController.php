<?php

namespace Frank\Http\Controllers;

use Symfony\Component\HttpFoundation\Response;

class HelloController
{
    public function index($name){

        return new Response('<html><body>Hello '.$name.'!</body></html>');
    }
}
