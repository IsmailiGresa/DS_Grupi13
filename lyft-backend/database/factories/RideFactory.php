<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ride>
 */
class RideFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ride_length_km' => $this->faker->randomDigit(),
            'amount' => $this->faker->randomDigit(),
            'pickup_location' => $this->faker->city(),
            'dropoff_location' => $this->faker->city(),
            'user_id' => User::all()->random()->id,
            'driver_id' => User::all()->where('role_id', 3)->random()->id,
        ];
    }
}
