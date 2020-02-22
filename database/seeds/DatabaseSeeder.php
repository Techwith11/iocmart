<?php

use App\Cart;
use App\Category;
use App\Order;
use App\Picture;
use App\Post;
use App\Store;
use App\User;
use Illuminate\Database\Seeder;
use Intervention\Image\Facades\Image;

class DatabaseSeeder extends Seeder
{
    public function drawImage($id,$path): void
    {
        $canvas = Image::canvas(300,300);
        $canvas->text($id,$canvas->getWidth()/2,$canvas->getHeight()/2,static function($font){
            $font->size(100);
        });
        $canvas->save($path);
    }
    public function run(): void
    {
        function drawImage($id,$path): void
        {
            $canvas = Image::canvas(300,300);
            $canvas->fill('#ffff00');
            $canvas->text($id,$canvas->getWidth()/2,$canvas->getHeight()/2,static function($font){
                $font->size(500);
            });
            $canvas->save($path);
        }
        factory(User::class,20)->create()->each(static function($user){
			$name = $user->id.'.jpg';
			drawImage($user->id,public_path('images/users/').$name);
            $user->picture()->create([ 'filename' => 'images/users/'.$name ]);
        });
        factory(Store::class,20)->create()->each(static function($store){
			$name = $store->id.'.jpg';
            drawImage($store->id,public_path('images/stores/').$name);
            $store->picture()->create([ 'filename' => 'images/stores/'.$name ]);
        });
        factory(Post::class,150)->create()->each(static function($post){
            $name = $post->id.'.jpg';
            drawImage($post->id,public_path('images/posts/').$name);
            $post->pictures()->create([ 'filename' => 'images/posts/'.$name ]);
        });
        factory(Cart::class,30)->create();
		factory(Order::class,100)->create();
        factory(Category::class,20)->create();
    }
}
