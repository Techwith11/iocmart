<?php

namespace App;

use App\Observers\OrderObserver;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
	protected $guarded = [];

	public static function boot(): void
	{
		parent::boot();
		self::observe(OrderObserver::class);
	}

	public function scopeMyOrders($query){
    	return $query->where('id', auth('api')->id);
	}

	public function user(): HasOne
	{
		return $this->hasOne(User::class);
	}

	public function post(): HasOne
	{
		return $this->hasOne(Post::class);
	}
}
