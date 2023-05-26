<?php

use App\Models\Ride;
use App\Models\Role;
use App\Models\User;
use App\Models\Charity;
use App\Models\Donation;
use App\Http\Controllers\Ride\RideController;
use App\Http\Controllers\Donation\DonationController;

it('shows users s rides', function () {
    Role::factory()->create([
        'id' => 1,
        'name' => 'admin',
        'description' => 'some description',
    ]);
    Role::factory()->create([
        'id' => 2,
        'name' => 'user',
        'description' => 'user',
    ]);

    Role::factory()->create([
        'id' => 3,
        'name' => 'driver',
        'description' => 'drives the users',
    ]);

    // Normal user
    $user = User::factory()->create(['role_id' => 2]);
    // Driver user
    User::factory()->create(['role_id' => 3]);
    Ride::factory(10)->for($user)->create();

    login($user);
    // Act as the user and send a POST request with the required data
    $response = $this->getJson(action([RideController::class, 'index']));

    expect($response->json('data'))->sequence(
        fn ($item) => $item->user_id->toBe($user->id)
    );
    // Assert that the donation was created successfully
    $response->assertStatus(200);

});
