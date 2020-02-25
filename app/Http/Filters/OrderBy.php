<?php

namespace App\Http\Filters;

class OrderBy extends Base
{
	protected function applyFilter($builder)
	{
		return $builder->orderBy(request($this->name()), request()->has('order') ? request('order') : 'asc');
	}
}
