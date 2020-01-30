<?php

namespace App\Policies;

use App\User;
use App\Cart;
use Illuminate\Auth\Access\HandlesAuthorization;

class CartPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
    	return true;
    }

    public function view(User $user, Cart $cart): bool
    {
    	return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Cart $cart): bool
    {
		return $cart->user_id == $user->id || $user->isAdmin();
    }

    public function delete(User $user, Cart $cart): bool
    {
		return $cart->user_id == $user->id || $user->isAdmin();
    }

    public function restore(User $user, Cart $cart):bool
    {
		return $cart->user_id == $user->id || $user->isAdmin();
    }

    public function forceDelete(User $user, Cart $cart): bool
    {
		return $cart->user_id == $user->id || $user->isAdmin();
    }
}
