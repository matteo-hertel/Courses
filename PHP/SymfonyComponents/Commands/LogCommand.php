<?php

namespace Commands;

use Symfony\Component\Console\Command\Command;

class LogCommand extends Command
{
    protected $dateFormat = 'D/m/Y H:i:s';

    protected function configure()
    {
        $this->setName('console:log')
                ->setDescription('Log a message');
    }

    protected function execute()
    {
        $now = new \DateTime();

        echo sprintf('%s: Log message', $no->format($this->dateFormat));
    }
}
