<?php

require __DIR__ . "/vendor/autoload.php";

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$request = Request::createFromGlobals();
$response = new Response();

switch($request->getPathInfo()) {
        case '/':
            $response->setContent('This is the home page');
            break;
        case '/about':
            $response->setContent('This is the about page');
            break;
        default:
            $response->setContent('Not found!');
            $response->setStatusCode(Response::HTTP_NOT_FOUND);
            break;
    }
$response->send();
