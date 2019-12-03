<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Route;

Route::resource('/','Admin\\IndexController');

Route::any('/{path}', static function(){
	throw new ModelNotFoundException('');
})->where('path',"([A-z\d\/_.\\s]+)?");
