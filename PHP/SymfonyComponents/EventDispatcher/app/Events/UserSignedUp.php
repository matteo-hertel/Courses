<?php
namespace App\Events;

use Symfony\Component\EventDispatcher\Event;

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
