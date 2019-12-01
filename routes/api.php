<?php

use Illuminate\Support\Facades\Route;

Route::prefix('/v1')->group(static function() {
	Route::get('profile', 'API\\v1\\AuthController@profile');
	Route::post('login', 'API\\v1\\AuthController@login');
	Route::post('register', 'API\\v1\\AuthController@register');
	Route::apiResources([
		'categories' => 'API\\v1\\CategoriesController',
		'orders' => 'API\\v1\\OrdersController',
		'pictures' => 'API\\v1\\PicturesController',
		'posts' => 'API\\v1\\PostsController',
		'stores' => 'API\\v1\\StoresController',
		'users' => 'API\\v1\\UsersController',
	]);
});
