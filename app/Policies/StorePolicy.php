<?php

namespace App\Policies;

use App\User;
use App\Store;
use Illuminate\Auth\Access\HandlesAuthorization;

class StorePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Store $store): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Store $store): bool
    {
		return $store->user_id === $user->id || $user->role === 1;
    }

    public function delete(User $user, Store $store): bool
    {
		return $store->user_id === $user->id || $user->role === 1;
    }

    public function restore(User $user, Store $store): bool
    {
		return $store->user_id === $user->id || $user->role === 1;
    }

    public function forceDelete(User $user, Store $store): bool
    {
		return $store->user_id === $user->id || $user->role === 1;
    }
}
