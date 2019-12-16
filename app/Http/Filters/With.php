<?php

namespace App\Http\Filters;

use Illuminate\Support\Str;

class With extends Base
{

	protected function applyFilter($builder)
	{
		$relations = explode(',',request($this->name()));
		return $builder->with(...$relations);
	}
}
