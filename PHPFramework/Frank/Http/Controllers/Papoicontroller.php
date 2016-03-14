<?php

namespace Frank\Http\Controllers;

use Symfony\Component\HttpFoundation\Response;

class PapoiController{
    public function papoi(){
        global $app;
        $app->fire("papoi");
        return new Response('meh');
    }
}
