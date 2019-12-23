<?php

namespace App\Http\Filters;

use Illuminate\Support\Str;

class With extends Base
{
	protected function applyFilter($builder)
	{
		$requests = explode(',',request($this->name()));
		$relations = $this->verifyRequestFields($requests);
		return $builder->with(...$relations);
	}
}
