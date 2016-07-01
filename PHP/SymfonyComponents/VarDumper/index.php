<?php

require __DIR__ . "/vendor/autoload.php";

class Tasks{

protected $tasks;

public function __constuct($tasks){
    $this->task = $task;
}

}

class Taks {

    protected $desctription;

    public function __construct($desctription){
        $this->desctription = $desctription;
    }

}


$tasks = new Tasks(
new Task("Test task"),
new Task("New Task"),
new Task("Go to the store"),
new Task("Commit to github")
);

dump($tasks);
