<?php

namespace App;

use App\Observers\PictureObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Picture extends Model
{
    protected $guarded = [];

	public static function boot(): void
	{
		parent::boot();
		self::observe(PictureObserver::class);
	}

    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }
}
