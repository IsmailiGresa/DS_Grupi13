<?php

use App\Models\Role;
use App\Models\User;
use App\Models\Charity;
use App\Models\Donation;
use App\Http\Controllers\Donation\DonationController;

it('creates a successful donation', function () {
    // Create a user and charity
    $role = Role::factory()->create();
    $user = User::factory()->create(['role_id' =>$role->id]);

    $charity = Charity::factory()->create();
    login($user);
    // Act as the user and send a POST request with the required data
    $response = $this->postJson(action([DonationController::class, 'store']), [
        'charity_id' => $charity->id,
        'amount' => 100,
    ]);
    // Assert that the donation was created successfully
    $response->assertStatus(200);
    $this->assertDatabaseHas(Donation::class, ['user_id' => $user->id, 'charity_id' => $charity->id,
        'amount' => 100, ]);
});
it('updates a donation', function () {
    // Create a user and charity
    $role = Role::factory()->create();
    $user = User::factory()->create(['role_id' => $role->id]);
    $charity = Charity::factory()->create();
    Donation::factory()->create([
        'charity_id' => $charity->id,
        'user_id' => $user->id,
    ]);
    login($user);
    $new_amount = 50;
    // Act as the user and send a POST request with the required data
    $response = $this->putJson(action([DonationController::class, 'update']), [

        'amount' => $new_amount,
    ]);
    // Assert that the donation was created successfully
    $response->assertStatus(200);
    $this->assertDatabaseHas(Donation::class, [
        'user_id' => $user->id, 'charity_id' => $charity->id,
        'amount' => $new_amount,
    ]);
});