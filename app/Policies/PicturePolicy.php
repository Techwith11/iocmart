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
		return true;
    }

    public function view(User $user, Picture $picture): bool
    {
		return true;
    }

    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    public function update(User $user, Picture $picture): bool
    {
		return $user->isAdmin() || $picture->imageable->id == $user->id ||
			$picture->imageable->id == $user->store->id ||
			$user->store->id == $picture->imageable->store_id;
    }

    public function delete(User $user, Picture $picture): bool
    {
		return $user->isAdmin() || $picture->imageable->id == $user->id ||
			$picture->imageable->id == $user->store->id ||
			$user->store->id == $picture->imageable->store_id;
    }

    public function restore(User $user, Picture $picture): bool
    {
		return $user->isAdmin() || $picture->imageable->id == $user->id ||
			$picture->imageable->id == $user->store->id ||
			$user->store->id == $picture->imageable->store_id;
    }

    public function forceDelete(User $user, Picture $picture): bool
    {
		return $user->isAdmin() || $picture->imageable->id == $user->id ||
			$picture->imageable->id == $user->store->id ||
			$user->store->id == $picture->imageable->store_id;
    }
}
