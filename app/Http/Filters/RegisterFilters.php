<?php

namespace App\Http\Filters;

use Illuminate\Pipeline\Pipeline;

trait RegisterFilters
{
	public static function queryBuilder()
	{
		return app(Pipeline::class)
			->send(self::query())
			->through([
				Distinct::class,
				GroupBy::class,
				Limit::class,
				Offset::class,
				OrderBy::class,
				Where::class,
				With::class,
			])
			->thenReturn()
			->when(request('limit'),static function($query){
				return $query->get();
			},static function($query){
				return $query->paginate(env('API_QUERY_LIMIT',50));
			});
	}
}
