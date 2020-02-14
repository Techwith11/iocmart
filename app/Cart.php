<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use App\Observers\CartObserver;
use App\Http\Filters\RegisterFilters;

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

	public function user(): HasOne
	{
		return $this->hasOne(User::class);
	}

	public function orders(): HasMany
	{
		return $this->hasMany(Order::class);
	}
}
