<?php

namespace App\Http\Filters;

class GroupBy extends Base
{
	protected function applyFilter($builder)
	{
		return $builder->groupBy(request($this->name()));
	}
}
