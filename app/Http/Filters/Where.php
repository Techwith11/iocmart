<?php

namespace App\Http\Filters;

class Where extends Base
{
	protected function applyFilter($builder)
	{
		$column = $this->verifyRequestField(request($this->name()));
		return $builder->where(
			$column,
			request()->has('op') ? request('op') : '=',
			request()->has('value') ? request('value') : ''
		);
	}
}
