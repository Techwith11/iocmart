<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
	{
		$this->app->bind('path.public', static function(){
            return base_path().DIRECTORY_SEPARATOR.'public';
        });
    }
}
