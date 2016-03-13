<?php

require __DIR__ . "/vendor/autoload.php";

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Frank\Http\Routes;


$request = Request::createFromGlobals();
$app = new \Frank\Core\Core();

Routes::setRoutes($app);

$response = $app->handle($request);


$response->send();
