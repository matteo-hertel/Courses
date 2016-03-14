<?php

namespace Frank\Core;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpKernelInterface;

use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\EventDispatcher\EventDispatcher;


class Core implements HttpKernelInterface{

    protected $routes, $dispatcher;

    public function __construct(){
        $this->routes = new RouteCollection();
        $this->dispatcher = new EventDispatcher();
    }

    public function handle(Request $request, $type = HttpKernelInterface::MASTER_REQUEST, $catch = true){

        $event = new \Frank\Event\RequestEvent();
        $event->setRequest($request);

        $this->dispatcher->dispatch("request", $event);

        $context = new RequestContext();
        $context->fromRequest($request);

        $matcher = new UrlMatcher($this->routes, $context);

        try{
            $attributes = $matcher->match($request->getPathInfo());
            $controller = new $attributes["controller"]["_controller"];
            $method = $attributes["controller"]["_method"];
            unset($attributes["controller"]);

			return call_user_func_array([$controller, $method], $attributes);
        }catch(ResourceNotFoundException $exc){
                return new Response("Not Found!", Response::HTTP_NOT_FOUND);
        }
    }

    public function map($path, $controller){
        $this->routes->add($path, new Route($path, array("controller" => $controller)));
    }

    public function on($event, $callback){
        $this->dispatcher->addListener($event, $callback);
    }
    public function fire($event){
        $this->dispatcher->dispatch($event);
    }

}
