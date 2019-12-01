<?php

namespace App\Policies;

use App\User;
use App\Picture;
use Illuminate\Auth\Access\HandlesAuthorization;

class PicturePolicy
{
    use HandlesAuthorization;

   	public function viewAny(User $user): bool
    {
		return $user->role === 1;
    }

    public function view(User $user, Picture $picture): bool
    {
		return $user->role === 1;
    }

    public function create(User $user): bool
    {
        return $user->role === 1;
    }

    public function update(User $user, Picture $picture): bool
    {
		return $user->role === 1 || $picture->imageable->id === $user->id ||
			$picture->imageable->id === $user->store->id ||
			$user->store->id === $picture->imageable->store_id;
    }

    public function delete(User $user, Picture $picture): bool
    {
		return $user->role === 1 || $picture->imageable->id === $user->id ||
			$picture->imageable->id === $user->store->id ||
			$user->store->id === $picture->imageable->store_id;
    }

    public function restore(User $user, Picture $picture): bool
    {
		return $user->role === 1 || $picture->imageable->id === $user->id ||
			$picture->imageable->id === $user->store->id ||
			$user->store->id === $picture->imageable->store_id;
    }

    public function forceDelete(User $user, Picture $picture): bool
    {
		return $user->role === 1 || $picture->imageable->id === $user->id ||
			$picture->imageable->id === $user->store->id ||
			$user->store->id === $picture->imageable->store_id;
    }
}
