<?php

/**
 * https://laracasts.com/series/discover-symfony-components/episodes/4
 * up to 10:59
 */
require __DIR__ . "/vendor/autoload.php";

use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\EventDispatcher\EventDispatcher;
use App\Events\UserSignedUp;

$dispatcher = new EventDispatcher();

$dispatcher->addListener(UserSignedUp::class, function(Event $event){
    echo"<pre style='color:#59E817; background-color:black; word-wrap:break-word;'>";
    var_dump("send welcome email", $event->user);
    echo"</pre>";
});
$dispatcher->addListener(UserSignedUp::class, function(Event $event){
    echo"<pre style='color:#59E817; background-color:black; word-wrap:break-word;'>";
    var_dump("send followup email", $event->user);
    echo"</pre>";
});

$event = new UserSignedUp((object)["name" => "Jonnho"]);
$dispatcher->dispatch(UserSignedUp::class, $event);
