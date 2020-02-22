<?php

namespace App\Listeners;

use App\Events\NewSingleImageUploadedEvent;
use Intervention\Image\Facades\Image;

class HandleMultipleImagesListener
{
    public function handle(NewSingleImageUploadedEvent $event): void
    {
    	$event->params['images']->each(static function($image) use ($event) {
			$object = $event->params['object'];
            $type = $event->params['type'];
            $path = 'images/'.$type.'/';
			$name = time().'.'.explode('/',explode(':',substr($image,0,
					strpos($image,';')))[1])[1];
			Image::make($image)->save(public_path($path).$name);
			$object->pictures->push(['filename' => $path.$name]);
		});
    }
}
