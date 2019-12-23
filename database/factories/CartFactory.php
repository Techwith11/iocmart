<?php

/** @var Factory $factory */

use App\Cart;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Cart::class, static function (Faker $faker) {
    return [
		'user_id' => $faker->numberBetween(1,5),
		'checked_out' => 0
    ];
});
