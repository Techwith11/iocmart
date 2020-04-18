<?php

namespace App;

use App\Http\Filters\RegisterFilters;
use App\Observers\PictureObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Facades\Storage;

class Picture extends Model
{
	use RegisterFilters;

	protected $guarded = [];

    protected $appends = ['uri'];

    protected $hidden = [
        'filename'
    ];

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

    public function getUriAttribute(): string
    {
        return Storage::disk(env('APP_ENV') === 'production' ? 's3' : 'public')->url($this->filename);
    }
}
