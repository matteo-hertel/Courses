<?php

require __DIR__ . "/vendor/autoload.php";

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$request = Request::createFromGlobals();
$app = new \Frank\Core();

$app->map('/hello/{name}', function ($name) {
		return new Response('Hello '.$name);
	});

$response = $app->handle($request);


$response->send();
