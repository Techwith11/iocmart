<?php

namespace App;

use App\Http\Filters\RegisterFilters;
use App\Observers\PictureObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Picture extends Model
{
	use RegisterFilters;

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
