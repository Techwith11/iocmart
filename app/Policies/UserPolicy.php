<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, User $model): bool
    {
		return true;
    }

    public function create(User $user): bool
    {
		return $user->role === 1;
    }

    public function update(User $user, User $model): bool
    {
		return $user->id === $model->id || $user->role === 1;
    }

    public function delete(User $user, User $model): bool
    {
		return $user->id === $model->id || $user->role === 1;
    }

    public function restore(User $user, User $model): bool
    {
		return $user->id === $model->id || $user->role === 1;
	}

    public function forceDelete(User $user, User $model): bool
    {
		return $user->id === $model->id || $user->role === 1;
	}
}
