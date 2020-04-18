<?php

namespace App\Listeners;

use App\Events\NewSingleImageUploadedEvent;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Str;
use Intervention\Image\Facades\Image;

class HandleSingleImageListener
{
    public function handle(NewSingleImageUploadedEvent $event): void
    {
        $image = $event->params['image'];
        $object = $event->params['object'];
        $type = Str::plural(Str::lower(class_basename($object)));
        $path = 'images/'.$type.'/';
		$name = time().'_'.$image->getClientOriginalName();
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
