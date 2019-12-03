<?php

namespace App\Observers;

use App\Order;

class OrderObserver
{
    public function created(Order $order): void
    {
        //
    }

    public function updated(Order $order): void
    {
        //
    }

    public function deleting(Order $order): void
    {
        //
    }

    public function restored(Order $order): void
    {
        //
    }

    public function forceDeleted(Order $order): void
    {
        //
    }
}
