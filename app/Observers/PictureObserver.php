<?php

namespace App\Observers;

use Illuminate\Support\Facades\Storage;
use App\Picture;

class PictureObserver
{
    public function created(Picture $picture): void
    {
        //
    }

    public function updating(Picture $picture): void
    {
        if($picture->isDirty('filename')){
            $filename = $picture->getOriginal('filename');
            Storage::disk(env('APP_ENV') === 'production' ? 's3' : 'public')->delete($filename);
        }
    }

    public function updated(Picture $picture): void
    {
        //
    }

    public function deleting(Picture $picture): void
    {
        $filename = $picture->filename;
        Storage::disk(env('APP_ENV') === 'production' ? 's3' : 'public')->delete($filename);
    }

    public function restored(Picture $picture): void
    {
        //
    }

    public function forceDeleted(Picture $picture): void
    {
        //
    }
}
