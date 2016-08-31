<?php
/**
 *  Up to 07:04
 * https://laracasts.com/series/discover-symfony-components/episodes/4
 */
require __DIR__ . "/vendor/autoload.php";

use Symfony\Component\EventDispatcher\Event;
use Symfony\Component\EventDispatcher\EventDispatcher;

$dispatcher = new EventDispatcher();

$dispatcher->addListener("UserSignedUp", function(Event $event){
    echo"<pre style='color:#59E817; background-color:black; word-wrap:break-word;'>";
    var_dump("send welcome email", $event->user);
    echo"</pre>";
});
$dispatcher->addListener("UserSignedUp", function(Event $event){
    echo"<pre style='color:#59E817; background-color:black; word-wrap:break-word;'>";
    var_dump("send followup email", $event->user);
    echo"</pre>";
});
/**
 * ``UserSignedUp
 */
class UserSignedUp extends Event
{
public $user;

    function __construct($user)
    {
        $this->user = $user;
    }
}
$event = new UserSignedUp((object)["name" => "Jonnho"]);
$dispatcher->dispatch("UserSignedUp", $event);
