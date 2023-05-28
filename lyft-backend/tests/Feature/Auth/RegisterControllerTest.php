<?php

use App\Models\Role;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Str;

it('can register user', function () {
    $password = $this->faker->password(8, 12);
    Role::factory()->create();
    $response = $this->postJson(action([RegisterController::class, 'register']), [
        'first_name' => $this->faker->firstName,
        'last_name' => $this->faker->lastName,
        'email' => $this->faker->unique()->safeEmail,
        'password' => $password,
        'password_confirmation' => $password,
        'remember_token' => Str::random(10),
    ]);
    $response->assertStatus(201);
});

