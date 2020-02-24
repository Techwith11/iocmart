<?php

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Seeder;
use App\User;
use App\Store;
use App\Post;
use App\Picture;
use App\Order;
use App\Category;
use App\Cart;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        function drawImage($id,$path): void
        {
            $canvas = Image::canvas(300,300);
            $canvas->fill('#ffff00');
            $canvas->text($id,$canvas->getWidth()/2,$canvas->getHeight()/2,static function($font){
                $font->size(500);
            });
            if(env('APP_ENV') === 'production'){
                Storage::disk('s3')->put($path,$canvas->encode(),'public');
            }else{
                Storage::disk('public')->put($path,$canvas->encode());
            }
        }
        factory(User::class,20)->create()->each(static function($user){
			$name = $user->id.'.jpg';
			drawImage($user->id,'images/users/'.$name);
            $user->picture()->create([ 'filename' => 'images/users/'.$name ]);
        });
        factory(Store::class,20)->create()->each(static function($store){
			$name = $store->id.'.jpg';
            drawImage($store->id,'images/stores/'.$name);
            $store->picture()->create([ 'filename' => 'images/stores/'.$name ]);
        });
        factory(Post::class,150)->create()->each(static function($post){
            $name = $post->id.'.jpg';
            drawImage($post->id,'images/posts/'.$name);
            $post->pictures()->create([ 'filename' => 'images/posts/'.$name ]);
        });
        factory(Cart::class,30)->create();
		factory(Order::class,100)->create();
        factory(Category::class,20)->create();
    }
}
