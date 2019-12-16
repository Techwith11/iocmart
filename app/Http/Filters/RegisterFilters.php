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
				OrderBy::class,
				Limit::class,
				Where::class,
				With::class,
			])
			->thenReturn()
			->get();
	}
}
