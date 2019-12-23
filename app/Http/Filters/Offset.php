<?php

namespace App\Http\Filters;

class Offset extends Base
{
	protected function applyFilter($builder)
	{
		return $builder->offset(request($this->name()));
	}
}
