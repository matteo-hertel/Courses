<?php

require __DIR__ . "/vendor/autoload.php";

use \Symfony\Component\Finder\Finder;


$files = Finder::create()->in(__DIR__ . "/vendor");

echo"<pre style='color:#59E817; background-color:black; word-wrap:break-word;'>";
var_dump($files);
echo"</pre>";
