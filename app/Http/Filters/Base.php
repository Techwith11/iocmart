<?php

namespace App\Http\Filters;

use Closure;
use Illuminate\Support\Str;

abstract class Base
{
	public function handle($request, Closure $next)
	{
		if(!request()->has($this->name())){
			return $next($request);
		}
		$builder = $next($request);
		return $this->applyFilter($builder);
	}

	abstract protected function applyFilter($builder);

	protected function name(): string
	{
		return Str::snake(class_basename($this));
	}
}
