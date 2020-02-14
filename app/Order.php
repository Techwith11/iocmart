<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use App\Observers\OrderObserver;
use App\Http\Filters\RegisterFilters;

class Order extends Model
{
	use RegisterFilters;

	protected $guarded = [];

	protected $casts = [
        'quantity' => 'integer',
        'cart_id' => 'integer',
        'post_id' => 'integer',
        'delivered' => 'integer'
    ];

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
