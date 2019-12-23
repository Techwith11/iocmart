<?php

namespace App\Http\Filters;

use Closure;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

abstract class Base
{
	public function handle($request, Closure $next)
	{
		if(!request()->has($this->name())){
			return $next($request);
		}
		$builder = $next($request);
		return $this->applyFilter($builder);
	}

	abstract protected function applyFilter($builder);

	protected function name(): string
	{
		return Str::snake(class_basename($this));
	}

	protected function verifyRequestField($value): string
	{
		return collect(self::allowedFields)->contains($value) ? $value : '';
	}

	protected function verifyRequestFields($values): Collection
	{
		return collect($values)->filter(static function($val){
			return collect(self::allowedFields)->contains($val);
		});
	}

	protected const allowedFields = [
		/* generic fields */ 'id', 'created_at', 'updated_at',
		/* user fields */ 'name', 'email', 'email_verified_at', 'phone', 'phone.phone_country', 'phone.phone', 'role',
		/* user relations */ 'store', 'orders', 'picture',
		/* post fields */ 'description', 'price', 'quantity', 'store_id', 'category_id',
		/* post relations */'store', 'category', 'pictures', 'orders',
		/* store fields */ 'link', 'user_id', 'picture',
		/* store relations */'user', 'posts',
		/* picture fields */ 'imageable_type', 'imageable_type', 'filename',
		/* picture relations */ 'imageable',
		/* order fields */ 'post_id', 'delivered',
		/* order relations */'user', 'post',
		/* category fields */ 'parent_id',
		/* category relations */ 'subs', 'parent',
	];
}
