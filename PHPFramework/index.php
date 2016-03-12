<?php

require __DIR__ . "/vendor/autoload.php";

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$request = Request::createFromGlobals();
$app = new \Frank\Core();

$response = $app->handle($request);


$response->send();
