<?php

/** @var Factory $factory */

use App\User;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(User::class, static function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'phone' => ['phone'=>$faker->phoneNumber, 'phone_country'=>$faker->countryCode],
        'password' => 'password'
    ];
});
