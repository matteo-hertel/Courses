<?php

require __DIR__ . "/vendor/autoload.php";

use \Symfony\Component\Finder\Finder;


$files = Finder::create()
->in(__DIR__ . "/vendor")
->name("*.md")
->contains("CHANGELOG");

foreach ($files as $file) {

    echo"<pre style='color:#59E817; background-color:black; word-wrap:break-word;'>";
    var_dump($file->getRealPath());
    echo"</pre>";
}
