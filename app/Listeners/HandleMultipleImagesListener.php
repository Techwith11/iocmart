<?php

namespace App\Listeners;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Events\NewSingleImageUploadedEvent;

class HandleMultipleImagesListener
{
    public function handle(NewSingleImageUploadedEvent $event): void
    {
		$event->params['images']->each(static function($image) use ($event) {
			$object = $event->params['object'];
            $type = $event->params['type'];
            $path = 'images/'.$type.'/';
			$name = time().'_'.$image->getClientOriginalName();
			Storage::disk(env('APP_ENV') === 'production' ? 's3' : 'public')->put(
				$path.$name, Image::make($image)->encode(), 'public'
			);
			$object->pictures->push(['filename' => $path.$name]);
		});
    }
}
