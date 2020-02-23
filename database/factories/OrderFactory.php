<?php

/** @var Factory $factory */

use App\Order;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Order::class, static function (Faker $faker) {
    return [
		'post_id' => $faker->numberBetween(1, 150),
		'cart_id' => $faker->numberBetween(1,30),
		'quantity' => $faker->numberBetween(1, 5)
    ];
});
