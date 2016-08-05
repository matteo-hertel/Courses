<?php

namespace Frank\Core;

use Symfony\Component\DependencyInjection\ContainerBuilder;

class Container {

    protected static $container;

    private function __construct(){}

    public static function getInstance(){
        if(null === self::$container){
            self::$container = new ContainerBuilder();
        }

        return self::$container;
    }

    public static function register($name, $class){
        self::getInstance()->register($name, $class);
    }

    public static function getService($name){
        return self::getInstance()->get($name);
    }

}

 ?>
