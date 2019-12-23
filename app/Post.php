<?php

namespace App;

use App\Http\Filters\RegisterFilters;
use App\Observers\PostObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Post extends Model
{
	use RegisterFilters;

	protected $guarded = [];

	protected $appends = ['is_ordered_by'];

	public static function boot(): void
	{
		parent::boot();
		self::observe(PostObserver::class);
	}

	public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function pictures(): MorphMany
    {
        return $this->morphMany(Picture::class,'imageable');
    }

    public function orders(): HasMany
	{
		return $this->hasMany(Order::class);
	}

	public function getIsOrderedByAttribute(): bool
	{
		return Order::myOrders()->where('post_id', $this->id)->count() > 0;
	}
}
