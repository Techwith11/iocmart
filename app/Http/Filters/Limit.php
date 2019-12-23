<?php

namespace App\Http\Filters;

class Limit extends Base
{
	protected function applyFilter($builder)
	{
		return $builder->take(
			request($this->name()) <= env('API_QUERY_LIMIT', 50) ? request($this->name()) : env('API_QUERY_LIMIT',50)
		);
	}
}
