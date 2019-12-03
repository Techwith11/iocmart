<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Route;

Route::get('profile', 'API\\v1\\AuthController@profile');
Route::post('login', 'API\\v1\\AuthController@login');
Route::post('register', 'API\\v1\\AuthController@register');
Route::apiResources([
	'categories' => 'Api\\v1\\CategoriesController',
	'orders' => 'Api\\v1\\OrdersController',
	'pictures' => 'Api\\v1\\PicturesController',
	'posts' => 'Api\\v1\\PostsController',
	'stores' => 'Api\\v1\\StoresController',
	'users' => 'Api\\v1\\UsersController',
]);

Route::any('/{path}', static function(){
	throw new ModelNotFoundException('');
})->where('path',"([A-z\d\/_.\\s]+)?");
