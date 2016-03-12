<?php

namespace Frank;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpKernelInterface;

class Core implements HttpKernelInterface{

public function handle(Request $request, $type = HttpKernelInterface::MASTER_REQUEST, $catch = true){
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
        return $response;
}

}
