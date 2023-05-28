<?php

use App\Http\Controllers\Auth\LoginController;
use App\Models\Role;
use App\Models\User;



it('can login user', function () {
    $password = Str::random();
    Role::factory()->create();
    $user = User::factory()->create(['password' => bcrypt($password)]);

    $response = $this->postJson(action(LoginController::class), [
        'email' => $user->email,
        'password' => $password,
    ]);

    $response->assertOk();
});

