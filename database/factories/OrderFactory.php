<?php

/** @var Factory $factory */

use App\Order;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Order::class, static function (Faker $faker) {
    return [
		'post_id' => $faker->numberBetween(1, 20),
		'user_id' => $faker->numberBetween(1,5),
		'quantity' => $faker->numberBetween(1, 5),
		'delivered' => 0
    ];
});
