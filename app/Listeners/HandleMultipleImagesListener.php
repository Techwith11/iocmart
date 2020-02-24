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
			$name = time().'.'.explode('/',explode(':',substr($image,0,
				strpos($image,';')))[1])[1];
			if(env('APP_ENV') === 'production'){
				Storage::disk('s3')->put($path.$name,Image::make($image)->encode());
			}else{
				Storage::disk('public')->put($path.$name,Image::make($image)->encode());
			}
			$object->pictures->push(['filename' => $path.$name]);
		});
    }
}
