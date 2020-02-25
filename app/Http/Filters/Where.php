<?php

namespace App\Http\Filters;

class Where extends Base
{
	protected function applyFilter($builder)
	{
		return $builder->where(
            request($this->name()),
			request()->has('op') ? request('op') : '=',
			request()->has('value') ? request('value') : ''
		);
	}
}
