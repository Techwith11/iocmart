<?php

namespace App\Providers;

use App\Events\NewMultipleImagesUploadedEvent;
use App\Events\NewSingleImageUploadedEvent;
use App\Events\NewOrChangedEmailEvent;
use App\Events\NewUserRegisteredEvent;
use App\Listeners\HandleMultipleImagesListener;
use App\Listeners\HandleSingleImageListener;
use App\Listeners\SendVerificationEmailListener;
use App\Listeners\SendWelcomeMailListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
		NewSingleImageUploadedEvent::class => [
			HandleSingleImageListener::class,
		],
		NewMultipleImagesUploadedEvent::class => [
			HandleMultipleImagesListener::class,
		],
        NewUserRegisteredEvent::class => [
            SendWelcomeMailListener::class,
        ],
		NewOrChangedEmailEvent::class => [
			SendVerificationEmailListener::class
		],
    ];

    public function boot(): void
    {
        parent::boot();
    }
}
