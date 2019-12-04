<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes([ 'register'=> false ]);

Route::resource('/','Admin\\IndexController');

Route::any('/{path}', static function(){
	throw new ModelNotFoundException("Route doesn't exist");
})->where('path',"([A-z\d\/_.\\s]+)?");
