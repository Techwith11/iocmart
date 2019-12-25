<?php

namespace App\Policies;

use App\User;
use App\Order;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrderPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
    	return true;
    }

    public function view(User $user, Order $order): bool
    {
    	return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Order $order): bool
    {
		return $order->cart->user_id === $user->id || $user->isAdmin();
    }

    public function delete(User $user, Order $order): bool
    {
		return $order->cart->user_id === $user->id || $user->isAdmin();
    }

    public function restore(User $user, Order $order):bool
    {
		return $order->cart->user_id === $user->id || $user->isAdmin();
    }

    public function forceDelete(User $user, Order $order): bool
    {
		return $order->cart->user_id === $user->id || $user->isAdmin();
    }
}
