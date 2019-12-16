<?php

namespace App\Http\Filters;

class Limit extends Base
{

	protected function applyFilter($builder)
	{
		return $builder->take(request($this->name()));
	}
}
