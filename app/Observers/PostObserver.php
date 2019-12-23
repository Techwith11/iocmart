<?php

namespace App\Observers;

use App\Post;

class PostObserver
{
    public function created(Post $post): void
    {
        //
    }

    public function updated(Post $post): void
    {
        //
    }

    public function deleting(Post $post): void
    {
        $post->pictures->each(static function ($picture) {
            $picture->delete();
        });
    }

    public function restored(Post $post): void
    {
        //
    }

    public function forceDeleted(Post $post): void
    {
        //
    }
}
