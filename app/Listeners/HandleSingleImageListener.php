<?php

namespace App\Listeners;

use Intervention\Image\Facades\Image;
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
		if(env('APP_ENV') === 'production'){
			Storage::disk('s3')->put($path.$name,Image::make($image)->encode());
		}else{
			Storage::disk('public')->put($path.$name,Image::make($image)->encode());
		}
		if($object->picture){
			$object->picture->update(['filename' => $path.$name]);
		}else{
			$object->picture()->create([ 'filename' => $path.$name ]);
		}
    }
}
