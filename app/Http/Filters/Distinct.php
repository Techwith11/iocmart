<?php

namespace App\Http\Filters;

class Distinct extends Base
{
	protected function applyFilter($builder)
	{
		$column = $this->verifyRequestField(request($this->name()));
		return $builder->distinct()->select($column);
	}
}
