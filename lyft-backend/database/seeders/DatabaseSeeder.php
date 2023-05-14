<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Ability;
use App\Models\Car;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(50)->create();
        Car::factory(10)->create();

        $role = Role::create([
            'name' => 'admin',
            'description' => 'some description'
        ]);

        $ability = Ability::create([
            'action' => 'create-driver',
            'model_name' => User::class
        ]);

        $role->abilities()->attach($ability);
    }
}
