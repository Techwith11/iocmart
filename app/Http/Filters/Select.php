<?php

namespace App\Http\Filters;

class Select extends Base
{
	protected function applyFilter($builder)
	{
		return $builder->distinct()->select(request($this->name()));
	}
}
