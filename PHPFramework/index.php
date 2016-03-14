<?php

require __DIR__ . "/vendor/autoload.php";

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Frank\Http\Routes;
use Frank\Event\RequestEvent;


$request = Request::createFromGlobals();
$app = new \Frank\Core\Core();

Routes::setRoutes($app);

$app->on("request", function(RequestEvent $event){
    echo"<pre style='color:#59E817; background-color:black; word-wrap:break-word;'>";
    var_dump($event->getRequest()->getPathInfo());
    echo"</pre>";
});


$response = $app->handle($request);


$response->send();
