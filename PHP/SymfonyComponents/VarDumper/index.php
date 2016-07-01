<?php

require __DIR__ . "/vendor/autoload.php";

class Tasks{

protected $tasks;

public function __construct($tasks){
    $this->tasks = $tasks;
}

}

class Task {

    protected $description;

    public function __construct($description){
        $this->description = $description;
    }

}


$tasks = new Tasks([
new Task("Test task"),
new Task("New Task"),
new Task("Go to the store"),
new Task("Commit to github")
]);

dump($tasks);
