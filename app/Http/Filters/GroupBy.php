<?php

namespace App\Http\Filters;

class GroupBy extends Base
{
	protected function applyFilter($builder)
	{
		$column = $this->verifyRequestField(request($this->name()));
		return $builder->groupBy($column);
	}
}
