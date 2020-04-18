<?php

namespace App\Providers;

use App\Cart;
use App\Category;
use App\Order;
use App\Picture;
use App\Policies\CartPolicy;
use App\Policies\CategoryPolicy;
use App\Policies\OrderPolicy;
use App\Policies\PicturePolicy;
use App\Policies\PostPolicy;
use App\Policies\StorePolicy;
use App\Policies\UserPolicy;
use App\Post;
use App\Store;
use App\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        User::class => UserPolicy::class,
		Post::class => PostPolicy::class,
		Store::class => StorePolicy::class,
		Category::class => CategoryPolicy::class,
		Picture::class => PicturePolicy::class,
		Order::class => OrderPolicy::class,
		Cart::class => CartPolicy::class
    ];

    public function boot(): Void
    {
        $this->registerPolicies();
        Passport::routes(null,['middleware'=>'auth:api']);
    }
}
