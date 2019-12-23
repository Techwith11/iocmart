<?php

namespace App\Http\Filters;

class OrderBy extends Base
{
	protected function applyFilter($builder)
	{
		$column = $this->verifyRequestField(request($this->name()));
		return $builder->orderBy($column, request('order') ?: 'asc');
	}
}
