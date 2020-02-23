<?php

namespace App\Http\Filters;

class Select extends Base
{
	protected function applyFilter($builder)
	{
		$columns = $this->verifyRequestFields(request($this->name()))->toArray();
		return $builder->distinct()->select($columns);
	}
}
