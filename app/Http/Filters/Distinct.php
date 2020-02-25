<?php

namespace App\Http\Filters;

class Distinct extends Base
{
	protected function applyFilter($builder)
	{
		return $builder->distinct()->select(request($this->name()));
	}
}
