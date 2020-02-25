<?php

namespace App\Http\Filters;

use Illuminate\Support\Str;

class With extends Base
{
	protected function applyFilter($builder)
	{
	    return $builder->with(request($this->name()));
	}
}
