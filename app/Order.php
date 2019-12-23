<?php

namespace App;

use App\Http\Filters\RegisterFilters;
use App\Observers\OrderObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
		return $query->where('cart_id',auth('api')->user()->currentCart()->id);
	}

	public function cart(): HasOne
	{
		return $this->hasOne(Cart::class);
	}

	public function post(): HasOne
	{
		return $this->hasOne(Post::class);
	}
}
