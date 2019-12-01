<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
	protected $guarded = [];

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
