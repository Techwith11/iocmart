<?php

namespace App;

use App\Http\Filters\RegisterFilters;
use App\Observers\OrderObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
	use RegisterFilters;

	protected $guarded = [];

	public static function boot(): void
	{
		parent::boot();
		self::observe(OrderObserver::class);
	}

	public static function scopeMyOrders($query)
	{
		return $query->where('cart_id',
			auth('api')->user() ? auth('api')->user()->currentCart->id : 0);
	}

	public function cart(): BelongsTo
	{
		return $this->belongsTo(Cart::class);
	}

	public function post(): BelongsTo
	{
		return $this->belongsTo(Post::class);
	}
}
