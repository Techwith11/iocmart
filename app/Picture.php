<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Model;
use App\Observers\PictureObserver;
use App\Http\Filters\RegisterFilters;

class Picture extends Model
{
	use RegisterFilters;

	protected $guarded = [];

	protected $casts = [
        'imageable_id' => 'integer'
    ];

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
