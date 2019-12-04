<?php

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Route;

Route::get('/user', 'Api\\v1\\AuthController@index');
Route::post('/password', 'Api\\v1\\AuthController@password');
Route::post('/login', 'Api\\v1\\AuthController@login');
Route::post('/register', 'Api\\v1\\AuthController@register');

Route::post('users/{id}/profile', 'Api\\v1\\UsersController@profile');
Route::post('stores/{id}/logo', 'Api\\v1\\StoresController@logo');

Route::apiResources([
	'categories' => 'Api\\v1\\CategoriesController',
	'orders' => 'Api\\v1\\OrdersController',
	'pictures' => 'Api\\v1\\PicturesController',
	'posts' => 'Api\\v1\\PostsController',
	'stores' => 'Api\\v1\\StoresController',
	'users' => 'Api\\v1\\UsersController',
]);

Route::any('/{path}', static function(){
	throw new ModelNotFoundException("Route doesn't exist");
})->where('path',"([A-z\d\/_.\\s]+)?");
