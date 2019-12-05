<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Collection;

class IsAdmin
{
	private $openRoutes;

	public function __construct()
	{
		$this->openRoutes =Collection::make(['/login']);
	}

	private function isAnOpenRoute($route): bool
	{
		return $this->openRoutes->contains($route);
	}

    public function handle($request, Closure $next)
    {
    	if($this->isAnOpenRoute($request->getPathInfo())){
    		return $next($request);
		}
    	if(auth('api')->user()){
    		if(auth('api')->user()->isAdmin()){
				return $next($request);
			}
			throw new AuthorizationException('Unauthorized access');
		}
    	throw new AuthenticationException('Login to continue', [], 'login');
    }
}
