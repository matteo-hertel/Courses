<?php

namespace Commands;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Output\OutputInterface;

class LogCommand extends Command
{
    protected $dateFormat = 'd/m/Y H:i:s';

    protected function configure()
    {
        $this->setName('log')
                ->setDescription('Log a message')
                ->addArgument('message', InputArgument::OPTIONAL, 'The message to log', 'default message');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $now = new \DateTime();

        $output->writeLn(sprintf('%s: %s', $now->format($this->dateFormat), $input->getArgument('message')));
    }
}
