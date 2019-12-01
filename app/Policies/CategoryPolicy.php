<?php

namespace App\Policies;

use App\User;
use App\Category;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Category $category): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
		return $user->role === 1;
    }

    public function update(User $user, Category $category): bool
    {
		return $user->role === 1;
    }

    public function delete(User $user, Category $category): bool
    {
		return $user->role === 1;
    }

    public function restore(User $user, Category $category): bool
    {
		return $user->role === 1;
    }

    public function forceDelete(User $user, Category $category): bool
    {
		return $user->role === 1;
    }
}
