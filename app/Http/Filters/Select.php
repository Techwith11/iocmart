<?php

namespace App\Http\Filters;

class Select extends Base
{
	protected function applyFilter($builder)
	{
		$requests = explode(',',request($this->name()));
		$columns = $this->verifyRequestFields($requests)->toArray();
		return $builder->distinct()->select($columns);
	}
}
