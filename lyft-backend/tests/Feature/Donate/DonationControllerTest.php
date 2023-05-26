<?php

use App\Http\Controllers\Donation\DonationController;
use App\Models\Charity;
use App\Models\Donation;
use App\Models\Role;
use App\Models\User;

it('creates a successful donation', function () {
    // Create a user and charity
    $role = Role::factory()->create();
    $user = User::factory()->create(['role_id' => $role->id]);

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



it('stops donation', function () {
    // Create a user and charity
    $role = Role::factory()->create();
    $user = User::factory()->create(['role_id' => $role->id]);
    $charity = Charity::factory()->create();
    $donation = Donation::factory()->create([
        'charity_id' => $charity->id,
        'user_id' => $user->id,
    ]);
    login($user);

    // Act as the user and send a DELETE request 
       $response = $this->deleteJson(action([DonationController::class, 'update']));
    // Assert that the donation was created successfully
    $response->assertStatus(200);

    $this->assertDatabaseMissing(Donation::class, ['user_id' => $user->id, 'id' => $donation->id]);

});




it('shows true if user is donating', function () {
    $role = Role::factory()->create();
    $user = User::factory()->create(['role_id' => $role->id]);
    $charity = Charity::factory()->create();
    Donation::factory()->create([
        'charity_id' => $charity->id,
        'user_id' => $user->id,
    ]);
    login($user);


    $response = $this->getJson(action([DonationController::class, 'is_donating']));
    // Assert that the donation was created successfully
    $response->assertStatus(200);

    expect($response->json('data'))->toBe(true);
    
});


it('shows false if user is not donating', function () {
    $role = Role::factory()->create();
    $userDonates = User::factory()->create(['role_id' => $role->id]);
    $userDoesNotDonate = User::factory()->create(['role_id' => $role->id]);
    $charity = Charity::factory()->create();
    Donation::factory()->create([
        'charity_id' => $charity->id,
        'user_id' => $userDonates->id,
    ]);
    login($userDoesNotDonate);


    $response = $this->getJson(action([DonationController::class, 'is_donating']));
    // Assert that the donation was created successfully
    $response->assertStatus(200);

    expect($response->json('data'))->toBe(false);
});