<?php

namespace App\Observers;

use App\Cart;

class CartObserver
{
	public function created(Cart $cart): void
	{
		//
	}

	public function updated(Cart $cart): void
	{
		//
	}

	public function deleting(Cart $cart): void
	{
		if($cart->orders){
			$cart->orders->each(static function($order){
				$order->delete();
			});
		}
	}

	public function restored(Cart $cart): void
	{
		//
	}

	public function forceDeleted(Cart $cart): void
	{
		//
	}
}
