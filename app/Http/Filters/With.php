<?php

namespace App\Http\Filters;

class With extends Base
{
	protected function applyFilter($builder)
	{
	    return $builder->with(request($this->name()));
	}
}
