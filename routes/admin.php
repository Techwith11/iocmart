<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Route;

Route::get('/{path}', static function(){
	// TODO: Implement admin view after frontend is implemented
	return view('admin');
})->where('path','([A-z\d\/_.\\s]+)?');

Route::match(
	['HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
	'/{path}', static function(){
	throw new ModelNotFoundException("Route doesn't exist");
})->where('path','([A-z\d\/_.\\s]+)?');
