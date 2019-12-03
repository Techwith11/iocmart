<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Access\AuthorizationException;

class IsAdmin
{
    public function handle($request, Closure $next)
    {
    	if(auth()->user()->isAdmin()){
			return $next($request);
		}
		throw new AuthorizationException('');
    }
}
