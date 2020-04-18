<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewSingleImageUploadedEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $params;

    public function __construct($params)
    {
        $this->params = $params;
    }

    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel('channel-name');
    }
}
