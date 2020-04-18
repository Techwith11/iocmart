<?php

namespace App;

use App\Http\Filters\RegisterFilters;
use App\Observers\CartObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cart extends Model
{
	use RegisterFilters;

	protected $guarded = [];

	protected $casts = [
        'user_id' => 'integer',
        'checked_out' => 'integer'
    ];

	public static function boot(): void
	{
		parent::boot();
		self::observe(CartObserver::class);
	}

	public static function scopeMyCarts($query)
	{
		return $query->where('user_id',auth()->id);
	}

	public static function scopeNotCheckedOut($query)
	{
		return $query->where('checked_out',0);
	}

	public function user(): BelongsTo
	{
		return $this->belongsTo(User::class);
	}

	public function orders(): HasMany
	{
		return $this->hasMany(Order::class);
	}
}
