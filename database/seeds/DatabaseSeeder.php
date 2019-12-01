<?php

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
    public function run(): void
    {
        factory(User::class,5)->create()->each(static function($user){
			$name = $user->id.'.png';
			Image::canvas(300,300)->save(public_path('images/users/').$name);
            $user->picture()->create([ 'filename' => 'images/users/'.$name ]);
        });
        factory(Store::class,5)->create()->each(static function($store){
			$name = $store->id.'.png';
			Image::canvas(300,300)->save(public_path('images/stores/').$name);
            $store->picture()->create([ 'filename' => 'images/stores/'.$name ]);
        });
        factory(Post::class,20)->create()->each(static function($post){
        	$name = $post->id.'.png';
        	Image::canvas(300,300)->save(public_path('images/posts/').$name);
            $post->pictures()->create([ 'filename' => 'images/posts/'.$name ]);
        });
		factory(Order::class,20)->create();
        factory(Category::class,5)->create();
    }
}
