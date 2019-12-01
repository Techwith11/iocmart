<?php

namespace App\Policies;

use App\User;
use App\Post;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Post $post): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Post $post): bool
    {
		return $post->store->user_id === $user->id || $user->role === 1;
    }

    public function delete(User $user, Post $post): bool
    {
		return $post->store->user_id === $user->id || $user->role === 1;
    }

    public function restore(User $user, Post $post): bool
    {
		return $post->store->user_id === $user->id || $user->role === 1;
    }

    public function forceDelete(User $user, Post $post): bool
    {
		return $post->store->user_id === $user->id || $user->role === 1;
    }
}
