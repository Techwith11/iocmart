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
    	return $user->role === 1;
    }

    public function view(User $user, Order $order): bool
    {
    	return $order->user_id === $user->id || $user->role === 1;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Order $order): bool
    {
		return $order->user_id === $user->id || $user->role === 1;
    }

    public function delete(User $user, Order $order): bool
    {
		return $order->user_id === $user->id || $user->role === 1;
    }

    public function restore(User $user, Order $order):bool
    {
		return $order->user_id === $user->id || $user->role === 1;
    }

    public function forceDelete(User $user, Order $order): bool
    {
		return $order->user_id === $user->id || $user->role === 1;
    }
}
