<?php

namespace App\Listeners;

use App\Events\NewSingleImageUploadedEvent;
use Intervention\Image\Facades\Image;

class HandleMultipleImagesListener
{
    public function handle(NewSingleImageUploadedEvent $event): void
    {
    	$event->params['images']->each(static function($image){
			$object = $event->params['object'];
			$path = $event->params['path'];
			$name = time().'.'.explode('/',explode(':',substr($image,0,
					strpos($image,';')))[1])[1];
			Image::make($image)->save(public_path($path).$name);
			$object->pictures->push(['filename' => $path.$name]);
		});
    }
}
