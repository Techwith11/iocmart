<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\ModelNotFoundException;

Route::get('/{path}', static function(){
	return view('home');
})->where('path','([A-z\d\/_.\\s]+)?');

Route::match(
	['HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
	'/{path}', static function(){
		throw new ModelNotFoundException("Route doesn't exist");
})->where('path','([A-z\d\/_.\\s]+)?');
