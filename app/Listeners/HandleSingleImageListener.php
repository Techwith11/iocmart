<?php

namespace App\Listeners;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Events\NewSingleImageUploadedEvent;

class HandleSingleImageListener
{
    public function handle(NewSingleImageUploadedEvent $event): void
    {
        $image = $event->params['image'];
        $object = $event->params['object'];
        $type = $event->params['type'];
        $path = 'images/'.$type.'/';
		$name = time().'.'.explode('/',explode(':',substr($image,0,
			strpos($image,';')))[1])[1];
		Storage::disk(env('APP_ENV') === 'production' ? 's3' : 'public')->put(
			$path.$name, Image::make($image)->encode(), 'public'
		);
		if($object->picture){
			$object->picture->update(['filename' => $path.$name]);
		}else{
			$object->picture()->create([ 'filename' => $path.$name ]);
		}
    }
}
